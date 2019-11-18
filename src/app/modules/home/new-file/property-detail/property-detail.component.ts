import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { PropertySearchResult } from '../../../../core/models/property-search-result';
import { Address } from '../../../../core/models/address';
import { PropertySearchType } from '../../../../core/enums/property-search-type';
import { environment } from '../../../../../environments/environment.prod';

@Component({
    selector: 'app-property-detail',
    templateUrl: './property-detail.component.html',
    styleUrls: ['./property-detail.component.scss', '../new-file.component.scss']
})
export class PropertyDetailComponent implements OnInit {

    @ViewChild('maps', { static: true }) mapsChild;
    @Input() searchType: PropertySearchType;

    mainMlsImg: string;

    property: PropertySearchResult;

    constructor() { }

    ngOnInit() {

        // new up a blank one for onload
        this.property = new PropertySearchResult();
        this.property.address = new Address();
    }

    initPropertyDetail(result: PropertySearchResult) {

        this.property = result;

        this.mapsChild.loadGoogleMap(this.formatAddress(result.address));

        // Get the mls path, if this is an MLS search result and if there is a path in the results
        if (this.property.propertyFields !== undefined) {
            if (this.property.propertyFields['image'] !== null) {
                this.mainMlsImg = this.searchType === PropertySearchType.MLS ? environment.mlsWfrImagePath + this.property.propertyFields['image'] : null;
            }
        }
    }

    formatAddress(address: Address): string {
        // Format the address
        let fullAddress: string = address.addressLine1;
        if (address.addressLine2 !== null && address.addressLine2 === '') fullAddress += ', ' + address.addressLine2;
        fullAddress += ', ' + address.city + ', ' + address.state;
        if (address.zip !== null && address.zip !== '') fullAddress += ' ' + address.zip;

        return fullAddress;
    }


}
