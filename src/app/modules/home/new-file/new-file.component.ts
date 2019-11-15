import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, finalize } from 'rxjs/operators';

import usaCounties from '../../../../assets/data/UsaCounties.json';
import { MlsSearchService } from '../../../core/services/mls-search.service.js';
import { ApnSearchService } from '../../../core/services/apn-search.service.js';
import { PropertySearchResult } from '../../../core/models/property-search-result';
import { AddressSearchComponent } from './address-search/address-search.component.js';
import { PropertySearchType } from '../../../core/enums/property-search-type';
import { ApnSearchComponent } from './apn-search/apn-search.component.js';
import { MlsSearchComponent } from './mls-search/mls-search.component.js';

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
    // MLS Sample: 1505252

    viewMode = 'newFileTab';  // default tab
    selectedVendorImgSrc: string;
    selectedVendorImgHeight: number;
    selectedVendorImgHeightResults: number;
    selectedVendorImgAlt: string;
    readyToDrop: boolean = false;
    searching: boolean = false;
    searchType: PropertySearchType;
    TEMPsearchSource: string;

    searchResults: PropertySearchResult[];
    showNewFile: boolean[] = [];

    // TODO:  Pull these from a source
    appraisalFormTypes = [{ text: '1004 URAR - UAD', value: '1004' }, { text: '1073', value: '1073' }];
    
    //stateJson: any = usaCounties;
    //countiesJsonAddressSearch: any;
    //countiesJsonApnSearch: any;

    //@ViewChild(AddressSearchComponent) addressSearchChild: AddressSearchComponent;  // This should work, but doesn't
    @ViewChild('addressSearch', { static: true }) addressSearchChild: AddressSearchComponent;       // It works when defined like this, where 'addressSearch' is a var on the html element
    @ViewChild('apnSearch', { static: true }) apnSearchChild;
    @ViewChild('mlsSearch', { static: true }) mlsSearchChild;
    //@ViewChild('maps', { static: true }) mapsChild;
    @ViewChild('propertyDetail', { static: true }) propertyDetailChild;

    @Input('newFileForm') newFileForm: FormGroup;

    constructor(private router: Router, private elementRef: ElementRef) {
    }


    ngOnInit() {
        this.selectedVendorImgSrc = '/assets/images/vendors/alamode.png';
        this.selectedVendorImgHeight = 25;
        this.selectedVendorImgAlt = 'a la mode';
        this.selectedVendorImgHeightResults = 24;
        this.searching = false;

        //$("#exampleModal").modal("show");

        this.newFileForm = new FormGroup({
            fileName: new FormControl('', Validators.required),
            formType: new FormControl('', Validators.required),
            mlsFileUpload: new FormControl('')
        });

        this.newFileForm.controls['formType'].setValue('1004');

    }

    // Validates the "New File" form
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

    // This is a bit of a hack, prob need a more robust solution
    isFormSearching(formGroup): boolean {
        if (formGroup.valid && this.searching == true) {
            return true;
        } else {
            return false;
        }
    }

    onAddressResults(event: PropertySearchResult[]) {
        //this.clearSearchResults();

        this.searchResults = event;
        this.showResults()  // show the modal with the results
        this.searchType = PropertySearchType.PublicRecords;
        this.TEMPsearchSource = "CoreLogic";
    }

    onApnResults(event: PropertySearchResult[]) {
        //this.clearSearchResults();

        this.searchResults = event;
        this.showResults()  // show the modal with the results
        this.searchType = PropertySearchType.PublicRecords;
        this.TEMPsearchSource = "CoreLogic";
    }

    onMlsResults(event: PropertySearchResult[]) {
        //this.clearSearchResults();

        this.searchResults = event;
        this.showResults()  // show the modal with the results
        this.searchType = PropertySearchType.MLS;
        this.TEMPsearchSource = "UtahRealEstate.com";
    }

    clearSearchResults(): void {
        this.searchResults = [];
        this.searching = false;
        for (let index in this.showNewFile) {
            this.showNewFile[index] = false;
        }

        //Call each child "clearSearchResults"
        this.apnSearchChild.clearSearchResults();
        this.addressSearchChild.clearSearchResults();
        this.mlsSearchChild.clearSearchResults();
        this.searchType = null;
        this.TEMPsearchSource = '';
    }

    showResults() {
        $("#searchResultsModal").modal("show");
    }

    initDetail(result: PropertySearchResult): void {
        //this.mapsChild.loadGoogleMap(fullAddress);
        //this.mapsChild.initPropertyDetail(result);
        this.propertyDetailChild.initPropertyDetail(result);
    }

    useAsSubject(e, i, element): void {
        //var s = e.srcElement;
        //var t = element;
        e.preventDefault();
        e.stopPropagation();


        // first hide all the new file items, then show the selected new file item
        this.showNewFile[i] = !this.showNewFile[i];

        for (let index in this.showNewFile) {
            if (index != i) {
                this.showNewFile[index] = false;
            }
        }

        // Hack until we actually wire this up
        if (element.parentElement.querySelector('#fileName') !== null) {
            //var value = element.parentElement.querySelector('.new-file-subject');
            $("#searchResultsModal").modal("hide");
            this.router.navigate(['/Subject/detail/' + element.parentElement.querySelector('#fileName').value]);

            //this.router.navigate(['/Subject/detail/1']);
        };
        //const item = parent.nativeElement.querySelector("new-file-subject");



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

    convertToAcres(sizeInSqFt: number): number {
        if (sizeInSqFt !== undefined) {
            return Math.round((sizeInSqFt * 0.0000229568) * 100) / 100;
        } else {
            return
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
