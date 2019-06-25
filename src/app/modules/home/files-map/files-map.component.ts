import { Component, OnInit } from '@angular/core';

// This uses the NPM package Angular Google Maps (AGM):  npm i @agm/core

@Component({
  selector: 'app-files-map',
  templateUrl: './files-map.component.html',
  styleUrls: ['./files-map.component.scss', '../home.component.scss']
})
export class FilesMapComponent implements OnInit {

  showAnalytics: boolean = false;

  // initial location
  lat: number = 41.0744597;
  lng: number = -111.9546887;

  zoom: number = 11;
  markers: marker[] = [
    { lat: 41.0748917, lng: -111.9632175, label: 'A' },
    { lat: 41.0467312, lng: -111.9930498, label: 'B' },
    { lat: 41.0744597, lng: -111.9546887, label: 'C' },
    { lat: 41.1026919, lng: -111.9818715, label: 'D' },
    { lat: 41.0962775, lng: -111.97747, label: 'E' },
    { lat: 41.0809294, lng: -111.9762823, label: 'F' },
    { lat: 41.0953183, lng: -111.97688, label: 'G' }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleAnalytics(showAnalytics: boolean): void {
    this.showAnalytics = showAnalytics;
  }

}

interface marker {
  lat: number;
  lng: number;
  label?: string;
}
