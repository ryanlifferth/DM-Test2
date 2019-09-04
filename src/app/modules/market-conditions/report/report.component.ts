import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

import { MarketAnalysisReportService } from '../../../core/services/market-analysis-report.service';
import { MarketAnalysisReport } from '../../../core/models/market-analysis-report';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reportData: MarketAnalysisReport;
  model: NgbDateStruct;
  foreclosureFactor: string;

  constructor(private maReportService: MarketAnalysisReportService, private calendar: NgbCalendar) { }

  ngOnInit() {


    // TODO:  Prob need to load this from the Market-Conditions module and then pass the comps object to this module
    this.maReportService.getReportData().subscribe(reportData => {
      this.reportData = reportData;
    });

  }

  // Gets the value by property name (string)
  // TODO:  I don't like the name of "parentProperty", rename to better descriptor
  getPropertyValueByName(parentProperty, propertyName) {
    for (var item in parentProperty) {
      if (item === propertyName) {
        return parentProperty[item];
      }
    }
    return false;
  }

  selectToday() {
    this.model = this.calendar.getToday();
    
  }



  //function propName(prop, value) {
  //  for (var i in prop) {
  //    if (prop[i] == value) {
  //      return i;
  //    }
  //  }
  //  return false;
  //}


}
