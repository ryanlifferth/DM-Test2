import { Component, OnInit, ViewChild } from '@angular/core';

import { PropertySearchResult } from '../../../../core/models/property-search-result';
import { Address } from '../../../../core/models/address';

@Component({
    selector: 'app-property-detail',
    templateUrl: './property-detail.component.html',
    styleUrls: ['./property-detail.component.scss', '../new-file.component.scss']
})
export class PropertyDetailComponent implements OnInit {

    @ViewChild('maps', { static: true }) mapsChild;

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
