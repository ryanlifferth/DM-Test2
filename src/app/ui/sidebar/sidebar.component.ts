import { Component, OnInit, ElementRef, ViewChild, DoCheck, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

import { SidebarLogoService } from '../../core/services/sidebar-logo.service';
import { UserInfo } from '../../core/models/user-info';
import { UserInfoService } from '../../core/services/user-info.service';
import { WindowSizeService } from '../../core/services/window-size.service';
import { ScreenSize } from '../../core/enums/screen-size';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewChecked, AfterViewInit {
  sidebarExpanded: boolean = false;
  @ViewChild('sideNavBar', { static: true }) sideNavbar: ElementRef;
  oldNavbarWidth: number = 0;
  userInfo: UserInfo;
  hasUserIcon: boolean = false;

  private screenSize: ScreenSize;
  private screenSizeName: string;


  constructor(private sidebarLogoService: SidebarLogoService,
    private userInfoService: UserInfoService,
    private windowSizeService: WindowSizeService) { }

  ngOnInit() {
    this.getUserInfo();

    //this.windowSizeService.screenSize.subscribe(val => {
    //  this.screenSize = val;
    //  this.screenSizeName = this.getEnumKeyByEnumValue(val);
    //  this.sidebarExpanded = this.screenSize === ScreenSize.XXL ? true : this.sidebarExpanded;
    //  console.log('screenSize: ' + this.screenSize);
    //});

  }

  ngAfterViewInit() {
    this.oldNavbarWidth = this.sideNavbar.nativeElement.offsetWidth;
    this.sidebarLogoService.setSidebarWidth(this.sideNavbar.nativeElement.offsetWidth);
  }

  ngAfterViewChecked() {
    //this.sidebarLogoService.setSidebarWidth(this.sideNavbar);
    if (this.oldNavbarWidth !== this.sideNavbar.nativeElement.offsetWidth) {
      this.sidebarLogoService.setSidebarWidth(this.sideNavbar.nativeElement.offsetWidth);
      this.oldNavbarWidth = this.sideNavbar.nativeElement.offsetWidth;
    }
  }

  ngDoCheck() {
    //if (this.oldNavbarWidth !== this.sideNavbar.nativeElement.offsetWidth) {
    //  this.sidebarLogoService.setSidebarWidth(this.sideNavbar.nativeElement.offsetWidth);
    //  this.oldNavbarWidth = this.sideNavbar.nativeElement.offsetWidth;
    //}
  }

  toggleMenu(): void {
    this.sidebarExpanded = this.sidebarExpanded == true ? false : true;
    this.sidebarLogoService.setSidebarExpanded(this.sidebarExpanded);
  }

  getEnumKeyByEnumValue(enumValue: number): string {
    let keys = Object.keys(ScreenSize).filter(x => ScreenSize[x] === enumValue);
    return keys.length > 0 ? keys[0] : '';
  }

  getUserInfo(): void {
    this.userInfoService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;

      if (userInfo.iconPath !== undefined && userInfo.iconPath.length > 0) {
        this.hasUserIcon = this.imageExists(userInfo.iconPath);

        // If the userInfo.iconPath is not empty, but the image doesn't exist (i.e., hasUserIcon === false)
        if (this.hasUserIcon === false) {
          this.checkForGravatar(userInfo.email);
        }
      } else {
        this.checkForGravatar(userInfo.email);
      }
      //this.hasUserIcon = true;
    });
  }

  private checkForGravatar(email: string): void {
    //email = "ryanlifferth@gmail.com";
    if (email.length > 0) {
      let gravatarUrl = 'http://www.gravatar.com/avatar/' + Md5.hashStr(email.toLowerCase().trim()) + '?size=110&d=404';
      if (this.imageExists(gravatarUrl)) {
        this.hasUserIcon = true;
        this.userInfo.iconPath = gravatarUrl;
      };
    }
  }


  private imageExists(imageUrl: string): boolean {
    var http = new XMLHttpRequest();

    http.open('HEAD', imageUrl, false);
    http.send();

    let exists = http.status != 404;
    this.hasUserIcon = exists;
    return exists;
  }

  private imageExists2(imageUrl: string): boolean {
    let pageThis = this;
    return this.imageExistsWithCallback(imageUrl, function (exists) {
      pageThis.hasUserIcon = exists;
      return exists;
    });
  }

  private imageExistsWithCallback(imageUrl: string, callback: Function): boolean {
    var img = new Image();
    img.onload = function () { return true; };
    img.onerror = function () { return false; };
    img.src = imageUrl;
    return false;
  }




}
