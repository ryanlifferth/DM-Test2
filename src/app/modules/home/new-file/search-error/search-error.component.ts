import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-error',
  templateUrl: './search-error.component.html',
  styleUrls: ['./search-error.component.scss']
})
export class SearchErrorComponent implements OnInit {

  searchHttpError: HttpErrorResponse;


  constructor() { }

  ngOnInit() {
  }

}
