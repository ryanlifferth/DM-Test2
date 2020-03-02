import { Component, OnInit, Input, ElementRef, HostListener, Output, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators, NgForm } from '@angular/forms';
import { catchError, finalize } from 'rxjs/operators';

import usaCounties from '../../../../../assets/data/UsaCounties.json';
import { AddressSearchService } from '../../../../core/services/address-search.service.js';
import { Address } from '../../../../core/models/address';
import { PropertySearchResult } from '../../../../core/models/property-search-result.js';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.scss', '../new-file.component.scss'],
  encapsulation: ViewEncapsulation.None  // TODO: shared CSS not working without this - not sure why
})
export class AddressSearchComponent implements OnInit {

  searchResults: PropertySearchResult[];
  searching: boolean = false;
  hasSearchResultsAddress: boolean = false;  // flag used to show search results if the modal gets closed

  @Input('addressSearchForm') addressSearchForm: FormGroup;
  @Output() resultsEvent = new EventEmitter<PropertySearchResult[]>();
  @Output() showResultsEvent = new EventEmitter<any>();
  @Output() clearAllSearchesEvent = new EventEmitter<any>();
  @ViewChild('searchError', { static: true }) searchErrorChild;

  stateJson: any = usaCounties;
  countiesJsonAddressSearch: any;

  constructor(private addressSearchService: AddressSearchService) { }

  ngOnInit() {
    this.searching = false;

    // Set up the form
    this.addressSearchForm = new FormGroup({
      address: new FormControl('', Validators.required),
      city: new FormControl(''),
      state: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required),
      zip: new FormControl('')
    });

    // Not sure if this is the right way to do this.  The json file is used to build the dropdowns
    this.stateJson = this.stateJson.filter(state => state.UsaTerritory === undefined);

    // Set the default state of the AddressSearchForm
    this.addressSearchForm.controls['state'].setValue('UT');
    this.countiesJsonAddressSearch = this.stateJson.filter(state => state.Abbreviation === 'UT')[0].Counties;

    this.addressSearchForm.controls['state'].valueChanges.subscribe(selectedState => {
      this.countiesJsonAddressSearch = this.stateJson.filter(state => state.Abbreviation === selectedState)[0].Counties;
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
      this.addressSearch();
      
    }
  }

  // This is a bit of a hack, prob need a more robust solution
  isFormSearching(formGroup): boolean {
    if (formGroup.valid && this.searching == true) {
      return true;
    } else {
      return false;
    }
  }

  addressSearch(): void {
    const address: Address = {
      addressLine1: this.addressSearchForm.controls['address'].value,
      city: this.addressSearchForm.controls['city'].value,
      state: this.addressSearchForm.controls['state'].value,
      county: this.addressSearchForm.controls['county'].value,
      zip: this.addressSearchForm.controls['zip'].value
    };
    this.addressSearchService.search(address)
      .pipe(
        finalize(() => {
          this.searching = false;
        })
      )
      .subscribe(
        (searchResults) => {
          //// TODO:  Open the search results modal
          //this.searchResults = searchResults;
          //this.searchResults[0].address = address;

          //$("#searchResultsModal").modal("show");  // show the modal with the results
          this.resultsEvent.emit(searchResults);
          
          this.hasSearchResultsAddress = true;

        },
        (err: HttpErrorResponse) => {
          // Log to the console - just for fun
          console.log(`${err.statusText} (${err.status}):  ${err.message}`);
          // Now display to the user
          this.searchErrorChild.searchHttpError = err;
          // TODO:  For prod, log somewhere for troubleshooting

        }
      );
  }

  showResults(): void {
    this.showResultsEvent.emit();
  }

  clearSearchResults(): void {
    this.searchResults = [];
    this.searching = false;
    this.hasSearchResultsAddress = false;
  }

}
