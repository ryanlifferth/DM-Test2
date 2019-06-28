import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  compCount: number;
  addressLine1: string;
  city: string;
  state: string;
  zip: string;

  constructor() { }

  ngOnInit() {
    this.compCount = 5;
    this.addressLine1 = "123 Somewhere Ave.";
    this.city = "Layton";
    this.state = "UT";
    this.zip = "84041";
  }

}
