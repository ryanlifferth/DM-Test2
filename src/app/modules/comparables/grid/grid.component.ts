import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CompHeaderService } from '../../../core/services/comp-header.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @ViewChild('subject') subjectGrid: ElementRef;
  @ViewChild('compsContainer') compsContainer: ElementRef;
  @ViewChild('comps') comps: ElementRef;

  compViewableAreaWidth: number = 0;
  compCount: number;
  addSubjectScrollMargin: boolean = false;
  addressLine1: string;
  city: string;
  state: string;
  zip: string;

  constructor(private compHeaderService: CompHeaderService) { }

  ngOnInit() {
    this.compCount = 5;
    this.addressLine1 = "123 Somewhere Ave.";
    this.city = "Layton";
    this.state = "UT";
    this.zip = "84041";

    this.compHeaderService.compHeaderWidth.subscribe(headerWidth => {
      //console.log('Comp body width: ' + headerWidth);
      this.compViewableAreaWidth = headerWidth;
      let subjectGridWidth: number = this.subjectGrid.nativeElement.offsetWidth;
      subjectGridWidth += 10; // for the left margin
      let newMaxWidth: number = headerWidth - subjectGridWidth;
      //this.comps.nativeElement.style.maxWidth = '1709px';
      this.compsContainer.nativeElement.style.maxWidth = newMaxWidth > 0 ? newMaxWidth + 'px' : '1100px';


      // Add the top margin to the subject grid if there is a scrollbar present
      if (this.comps.nativeElement.offsetWidth > this.compsContainer.nativeElement.offsetWidth) {
        this.subjectGrid.nativeElement.style.marginTop = '17px';  //Code below gives an error.....not sure why
        //this.addSubjectScrollMargin = true;
      } else {
        this.subjectGrid.nativeElement.style.marginTop = '0';  //Code below gives an error.....not sure why
        //this.addSubjectScrollMargin = false;
      }

    });
  }

  //ngAfterViewInit() {
  //  //this.oldNavbarWidth = this.sideNavbar.nativeElement.offsetWidth;
  //  //this.sidebarLogoService.setSidebarWidth(this.sideNavbar.nativeElement.offsetWidth);
  //  // Get the initial max width for the #comps element (for overflow)
  //  //this.logo.nativeElement.style.width = val + 'px';
  //  this.comps.nativeElement.style.maxWidth = '1709px';

  //  let subjectGridWidth: number = this.subjectGrid.nativeElement.offsetWidth;
  //  subjectGridWidth += 10; // for the left margin
  //  if ()
  //}

  //ngAfterViewChecked() {
  //  if (this.oldNavbarWidth !== this.sideNavbar.nativeElement.offsetWidth) {
  //    this.sidebarLogoService.setSidebarWidth(this.sideNavbar.nativeElement.offsetWidth);
  //    this.oldNavbarWidth = this.sideNavbar.nativeElement.offsetWidth;
  //  }
  //}

}
