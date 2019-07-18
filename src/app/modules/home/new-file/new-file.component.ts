import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, finalize } from 'rxjs/operators';

import usaCounties from '../../../../assets/data/UsaCounties.json';
import { AddressSearchService } from '../../../core/services/address-search.service.js';
import { MlsSearchService } from '../../../core/services/mls-search.service.js';
import { ApnSearchService } from '../../../core/services/apn-search.service.js';
import { Address } from '../../../core/models/address';
import { PropertySearchResult } from '../../../core/models/property-search-result';

//
//  This component should be broken into (probably) four or more different components, one for each
//  of the search tabs and one for the search results (modal result).
//  Additionally this form is a "REACTIVE" form, but should probably move to template form (model-driven)
//  once we have the models all figured out
//
@Component({
  selector: 'app-new-file',
  templateUrl: './new-file.component.html',
  styleUrls: ['./new-file.component.scss', '../home.component.scss']
})
export class NewFileComponent implements OnInit {
  viewMode = 'newFileTab';  // default tab
  selectedVendorImgSrc: string;
  selectedVendorImgHeight: number;
  selectedVendorImgAlt: string;
  readyToDrop: boolean = false;
  searching: boolean = false;
  hasSearchResultsAddress: boolean = false;  // flag used to show search results if the modal gets closed
  hasSearchResultsMls: boolean = false;
  hasSearchResultsApn: boolean = false;
  searchResults: PropertySearchResult[];
  
  // TODO:  Pull these from a source
  appraisalFormTypes = [{ text: '1004 URAR - UAD', value: '1004' }, { text: '1073', value: '1073' }];

  stateJson: any = usaCounties;
  countiesJsonAddressSearch: any;
  countiesJsonApnSearch: any;

  @Input('newFileForm') newFileForm: FormGroup;
  @Input('addressSearchForm') addressSearchForm: FormGroup;
  @Input('mlsSearchForm') mlsSearchForm: FormGroup;
  @Input('apnSearchForm') apnSearchForm: FormGroup;

  constructor(private router: Router,
    private addressSearchService: AddressSearchService,
    private mlsSearchService: MlsSearchService,
    private apnSearchService: ApnSearchService) {
    //console.log(usaCounties);
    //for (let state of usaCounties) {
    //  console.log(state.State + " (" + state.Abbreviation + ")");
    //}
    //for (let county of this.countiesJson) {
    //  console.log(county.CountyName);
    //}
  }


  ngOnInit() {
    this.selectedVendorImgSrc = '/assets/images/vendors/alamode.png';
    this.selectedVendorImgHeight = 30;
    this.selectedVendorImgAlt = 'a la mode';
    this.searching = false;

    //$("#exampleModal").modal("show");

    this.newFileForm = new FormGroup({
      fileName: new FormControl('', Validators.required),
      formType: new FormControl('', Validators.required),
      mlsFileUpload: new FormControl('')
    });

    this.addressSearchForm = new FormGroup({
      address: new FormControl('', Validators.required),
      city: new FormControl(''),
      state: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required),
      zip: new FormControl('')
    });

    this.mlsSearchForm = new FormGroup({
      mlsNumber: new FormControl('', Validators.required)
    });

    this.apnSearchForm = new FormGroup({
      apnNumber: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required)
    });

    this.newFileForm.controls['formType'].setValue('1004');

    // Not sure if this is the right way to do this.  The json file is used to build the dropdowns
    this.stateJson = this.stateJson.filter(state => state.UsaTerritory === undefined);

    // Set the default state of the AddressSearchForm
    this.addressSearchForm.controls['state'].setValue('UT');
    this.countiesJsonAddressSearch = this.stateJson.filter(state => state.Abbreviation === 'UT')[0].Counties;

    this.addressSearchForm.controls['state'].valueChanges.subscribe(selectedState => {
      this.countiesJsonAddressSearch = this.stateJson.filter(state => state.Abbreviation === selectedState)[0].Counties;
    });

    // Set the default state of the APNSearchForm
    this.apnSearchForm.controls['state'].setValue('UT');
    this.countiesJsonApnSearch = this.stateJson.filter(state => state.Abbreviation === 'UT')[0].Counties;

    this.apnSearchForm.controls['state'].valueChanges.subscribe(selectedState => {
      this.countiesJsonApnSearch = this.stateJson.filter(state => state.Abbreviation === selectedState)[0].Counties;
    });

  }

  validate() {
    this.searching = false;
    if (this.newFileForm.valid === false) {
      //this.newFileForm.controls[''].markAsTouched();
      for (let item in this.newFileForm.controls) {
        //console.log(this.newFileForm.controls[item]);
        this.newFileForm.controls[item].markAsTouched();
      }
    } else {
      // TODO: create the new work file

      this.router.navigate(['/Comparables']);
    }
  }

  searchValidate(formGroup) {
    this.clearSearchResults();  // clear the results

    if (formGroup.valid === false) {
      for (let item in formGroup.controls) {
        //console.log(this.newFileForm.controls[item]);
        formGroup.controls[item].markAsTouched();
      }
    } else {
      this.searching = true;

      // TODO: execute the appropriate search
      //alert('Running the search....\r\n(Not really, this is just a placeholder)');
      switch (formGroup) {
        case this.addressSearchForm: {
          this.addressSearch();
          break;
        }
        case this.mlsSearchForm: {
          this.mlsSearch();
          break;
        }
        case this.apnSearchForm: {
          this.apnSearch();
          break;
        }
      }
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
          // TODO:  Open the search results modal
          //alert('Property found: ' + searchResults[0].apn);
          this.searchResults = searchResults;
          this.searchResults[0].address = address;

          $("#searchResultsModal").modal("show");  // show the modal with the results
          this.hasSearchResultsAddress = true;
        },
        (err) => {
          alert('error: ' + err);
          //TODO:  Add error handling
        }
      );
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
          // TODO:  Open the search results modal
          //alert('Property found: ' + searchResults[0].apn);
          this.searchResults = searchResults;
          this.searchResults[0].mlsNumber = mlsNumber;

          $("#searchResultsModal").modal("show");  // show the modal with the results
          this.hasSearchResultsMls = true;
        },
        (err) => {
          // Do something with the error
          console.log('error: ' + err);
        }
      );
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
          // TODO:  Open the search results modal
          //alert('Property found: ' + searchResults[0].apn);
          this.searchResults = searchResults;
          this.searchResults[0].apn = apnNumber;
          this.searchResults[0].address.county = county;
          this.searchResults[0].address.state = state;

          $("#searchResultsModal").modal("show");  // show the modal with the results
          this.hasSearchResultsApn = true;
        },
        (err) => {
          alert('error: ' + err);
          //TODO:  Add error handling
        }
      );
  }

  clearSearchResults(): void {
    this.searchResults = [];
    this.searching = false;
    this.hasSearchResultsAddress = false;
    this.hasSearchResultsMls = false;
    this.hasSearchResultsApn = false;
  }

  showResults() {
    $("#searchResultsModal").modal("show");
  }

  updateVendor(e) {
    if (e.srcElement.localName === 'img') {
      //console.log(e.srcElement.src);
      this.selectedVendorImgSrc = e.srcElement.src;
      this.selectedVendorImgHeight = e.srcElement.height;
      this.selectedVendorImgAlt = e.srcElement.alt;
    } else {
      //console.log(e.srcElement.children[0].src);
      this.selectedVendorImgSrc = e.srcElement.children[0].src;
      this.selectedVendorImgHeight = e.srcElement.children[0].height;
      this.selectedVendorImgAlt = e.srcElement.children[0].alt;
    }
  }

  allowDrop(e) {
    //console.log('get to droppin');
    this.readyToDrop = true;
    e.preventDefault();
    e.stopPropagation();
  }

  doneDropping(e) {
    this.readyToDrop = false;
  }

  drop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.readyToDrop = false;
    console.log(e.dataTransfer.files[0].name);

    //this.newFileForm.controls['fileName'].setValue(e.dataTransfer.files[0].name);
    //this.newFileForm.controls['mlsFileUpload'].setValue(e.dataTransfer.files[0].name);
    //this.newFileForm.controls['mlsFileUpload'].files = e.dataTransfer.files;

    //this.handleFiles(e.dataTransfer.files[0]);
    //document.querySelector('.file-upload').files = e.dataTransfer.files;  // this is a hack and it throws a TS error - but it works

  }

}
