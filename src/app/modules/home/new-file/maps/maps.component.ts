import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

import { PropertySearchResult } from '../../../../core/models/property-search-result';
import { Address } from '../../../../core/models/address';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss', '../property-detail/property-detail.component.scss']
})
export class MapsComponent implements OnInit {
    //@ViewChild("myMap", { static: false }) myMap: ElementRef;
    //@ViewChild(GoogleMap, { static: false }) map: GoogleMap;
    @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
    @ViewChild(MapMarker, { static: false }) marker: MapMarker;

    mapLoaded: boolean = false;
    geocodeError: string = '';
    streetviewLoaded: boolean = false;
    streetviewError: string = '';

    geocoder = new google.maps.Geocoder();
    center: google.maps.LatLng;// = { lat: 24, lng: 12 };
    zoom = 17;
    options: google.maps.MapOptions = {
        zoom: this.zoom
    };
    markerOptions = { draggable: false };
    markerPosition: google.maps.LatLng;
    infoWindowContent: string = '[temp]';

    sv: google.maps.StreetViewService = new google.maps.StreetViewService();
    panorama: google.maps.StreetViewPanorama;

    constructor() { }

    ngOnInit() {

        // Don't call on ngOnInit, call on "view detail"
        //this.initializeGoogleMap();
    }

    //initPropertyDetail(result: PropertySearchResult) {

    //    this.propertyResult = result;

    //    this.loadGoogleMap(this.formatAddress(result.address));
    //}

    loadGoogleMap(address: string): void {
        // reset values
        this.mapLoaded = false;
        this.streetviewLoaded = false;
        this.geocodeError = '';
        this.streetviewError = '';

        this.geocoder.geocode({
            'address': address
        }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
            if (status === google.maps.GeocoderStatus.OK) {
                // Check to see if this is just re-displaying the same property
                if (this.center !== undefined) {
                    if (this.center.toString() === results[0].geometry.location.toString()) {
                        //this.mapLoaded = true;
                        //this.streetviewLoaded = true;
                        //return;
                    }
                }

                this.mapLoaded = true;
                this.center = results[0].geometry.location;
                this.zoom = 17;
                //alert(this.center);

                this.marker._marker.setVisible(true);
                this.markerPosition = this.center;
                this.infoWindowContent = results[0].formatted_address;

                this.sv.getPanoramaByLocation(results[0].geometry.location, 50, (data, svStatus: google.maps.StreetViewStatus) => {
        
                    if (svStatus === google.maps.StreetViewStatus.OK) {
                        this.streetviewLoaded = true;

                        this.panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), { addressControl: true, fullscreenControl: false, imageDateControl: true });
                        this.panorama.setPano(data.location.pano);

                        const heading = google.maps.geometry.spherical.computeHeading(data.location.latLng, this.center);

                        this.panorama.setPov({
                            heading: heading,
                            pitch: 0
                        });
                        this.panorama.setVisible(true);

                    } else {
                        // Error during streetview lookup
                        //this.streetviewError = 'Error getting the streetview for this address (Error code: ' + google.maps.StreetViewStatus[svStatus] + ')';
                        switch (svStatus) {
                            case google.maps.StreetViewStatus.ZERO_RESULTS:
                                this.streetviewError = 'Streetview is not available for this address';
                                break;
                            default:
                                this.streetviewError = 'We hit an error pulling up the streetview for this address';
                                break;
                        }

                        this.panorama.setVisible(false);
                        this.streetviewLoaded = true;
                    }
                });
            } else {
                // Error during geocode look up
                //this.geocodeError = 'Error finding this address (Error code: ' + google.maps.GeocoderStatus[status] + ')';
                this.geocodeError = 'We ran into an error retrieving the map for this property';
                this.streetviewError = 'We hit an error pulling up the streetview for this address';
                this.mapLoaded = true;
                this.streetviewLoaded = true;

                this.panorama.setVisible(false);
                this.center = undefined;
                this.marker._marker.setVisible(false);
                this.zoom = 6
            }
        });


    }

    openInfoWindow(marker: MapMarker) {
        this.infoWindow.open(marker);
    }
}
