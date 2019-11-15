import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { MlsSearchService } from '../../../../core/services/mls-search.service.js';
import { PropertySearchResult } from '../../../../core/models/property-search-result.js';

@Component({
  selector: 'app-mls-search',
  templateUrl: './mls-search.component.html',
  styleUrls: ['./mls-search.component.scss', '../new-file.component.scss'],
  encapsulation: ViewEncapsulation.None  // TODO: shared CSS not working without this - not sure why
})
export class MlsSearchComponent implements OnInit {
    // Test MLS: 1505252


  searchResults: PropertySearchResult[];
  searching: boolean = false;
  hasSearchResultsMls: boolean = false;  // flag used to show search results if the modal gets closed

  @Input('mlsSearchForm') mlsSearchForm: FormGroup;
  @Output() resultsEvent = new EventEmitter<PropertySearchResult[]>();
  @Output() showResultsEvent = new EventEmitter<any>();
  @Output() clearAllSearchesEvent = new EventEmitter<any>();

  constructor(private mlsSearchService: MlsSearchService) { }

  ngOnInit() {
    this.searching = false;

    this.mlsSearchForm = new FormGroup({
      mlsNumber: new FormControl('', Validators.required)
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
      this.mlsSearch();

    }

  }

  mlsSearch(): void {
    const mlsNumber: string = this.mlsSearchForm.controls['mlsNumber'].value;

    this.mlsSearchService.search(mlsNumber)
      .pipe(
        finalize(() => {
          this.searching = false;
        })
      )
      .subscribe(
        (searchResults) => {
          //// TODO:  Open the search results modal
          ////alert('Property found: ' + searchResults[0].apn);
          //this.searchResults = searchResults;
          //this.searchResults[0].mlsNumber = mlsNumber;

          //$("#searchResultsModal").modal("show");  // show the modal with the results
          this.resultsEvent.emit(searchResults);

          this.hasSearchResultsMls = true;
        },
        (err) => {
          // Do something with the error
          console.log('error: ' + err);
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
    this.hasSearchResultsMls = false;
  }


}
