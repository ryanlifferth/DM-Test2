import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { catchError, finalize } from 'rxjs/operators';

import usaCounties from '../../../../../assets/data/UsaCounties.json';
import { ApnSearchService } from '../../../../core/services/apn-search.service.js';
import { PropertySearchResult } from '../../../../core/models/property-search-result.js';

@Component({
  selector: 'app-apn-search',
  templateUrl: './apn-search.component.html',
  styleUrls: ['./apn-search.component.scss', '../new-file.component.scss'],
  encapsulation: ViewEncapsulation.None  // TODO: shared CSS not working without this - not sure why
})
export class ApnSearchComponent implements OnInit {

  searchResults: PropertySearchResult[];
  searching: boolean = false;
  hasSearchResultsApn: boolean = false;  // flag used to show search results if the modal gets closed

  @Input('apnSearchForm') apnSearchForm: FormGroup;
  @Output() resultsEvent = new EventEmitter<PropertySearchResult[]>();
  @Output() showResultsEvent = new EventEmitter<any>();
  @Output() clearAllSearchesEvent = new EventEmitter<any>();

  stateJson: any = usaCounties;
  countiesJsonApnSearch: any;

  constructor(private apnSearchService: ApnSearchService) { }
  
  ngOnInit() {
    this.searching = false;

    this.apnSearchForm = new FormGroup({
      apnNumber: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required)
    });

    // Not sure if this is the right way to do this.  The json file is used to build the dropdowns
    this.stateJson = this.stateJson.filter(state => state.UsaTerritory === undefined);

    // Set the default state of the APNSearchForm
    this.apnSearchForm.controls['state'].setValue('UT');
    this.countiesJsonApnSearch = this.stateJson.filter(state => state.Abbreviation === 'UT')[0].Counties;

    this.apnSearchForm.controls['state'].valueChanges.subscribe(selectedState => {
      this.countiesJsonApnSearch = this.stateJson.filter(state => state.Abbreviation === selectedState)[0].Counties;
    });

  }

  searchValidate(formGroup) {
    //this.clearSearchResults();  // clear the results
    this.clearAllSearchesEvent.emit();

    if (formGroup.valid === false) {
      for (let item in formGroup.controls) {
        //console.log(this.newFileForm.controls[item]);
        formGroup.controls[item].markAsTouched();
      }
    } else {

      this.searching = true;

      // TODO: execute the appropriate search
      //alert('Running the search....\r\n(Not really, this is just a placeholder)');
      this.apnSearch();

    }

  }


  apnSearch(): void {
    const apnNumber: string = this.apnSearchForm.controls['apnNumber'].value;
    const state: string = this.apnSearchForm.controls['state'].value;
    const county: string = this.apnSearchForm.controls['county'].value;

    this.apnSearchService.search(apnNumber, state, county)
      .pipe(
        finalize(() => {
          this.searching = false;
        })
      )
      .subscribe(
        (searchResults) => {
          this.resultsEvent.emit(searchResults);

          this.hasSearchResultsApn = true;

        },
        (err) => {
          alert('error: ' + err);
          //TODO:  Add error handling
        }
      );
  }

  // This is a bit of a hack, prob need a more robust solution
  isFormSearching(formGroup): boolean {
    if (formGroup.valid && this.searching == true) {
      return true;
    } else {
      return false;
    }
  }

  showResults(): void {
    this.showResultsEvent.emit();
  }

  clearSearchResults(): void {
    this.searchResults = [];
    this.searching = false;
    this.hasSearchResultsApn = false;
  }

}
