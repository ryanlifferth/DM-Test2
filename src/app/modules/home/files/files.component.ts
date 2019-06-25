import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

import { FileInfo } from '../../../core/models/file-info';
import { FileInfoService } from '../../../core/services/file-info.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss', '../home.component.scss']
})
export class FilesComponent implements OnInit {
  // Tab example taken from https://www.codementor.io/temidayoajisebutu/an-easy-way-to-create-tabs-using-ngswitch-in-angular-2-io3cowd0g
  viewMode = 'tab1';  // default tab
  fileInfos: FileInfo[];
  selectedFileInfo: FileInfo;
  pinnedFileInfos: FileInfo[];

  constructor(private fileInfoService: FileInfoService) { }

  ngOnInit() {
    this.getFileInfos();
    this.getPinnedFileInfos();
  }

  onSelect(fileInfo: FileInfo): void {
    this.selectedFileInfo = fileInfo;
  }

  getDynamicExportLabel(exportCount: number): string {
    return exportCount === 1 ? 'export' : 'exports';
  }

  getFileInfos(): void {
    const cutoffDate: Date = new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 261));

    this.fileInfoService.getFileInfos()
      .subscribe(fileInfos => {
        //this.fileInfos = fileInfos;
        this.fileInfos = fileInfos.filter(info => info.lastModified > cutoffDate);
      });
  }

  getPinnedFileInfos(): void {

    this.fileInfoService.getFileInfos()
      .subscribe(fileInfos => {

        this.pinnedFileInfos = fileInfos.filter(info => info.id === 1 || info.id === 4 || info.id === 5);
      });
  }

  loadAllFiles(): void {
    const cutoffDate: Date = new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 261));

    // this is a hack to show potential functionality
    this.fileInfoService.getFileInfos()
      .subscribe(fileInfos => {
        fileInfos.filter(info => info.lastModified < cutoffDate)
          .forEach(info => {
            this.fileInfos.push(info);
          });
      });
  }

  getDynamicDateLabel(modifiedDate: Date): string {
    var magicNumber = (1000 * 60 * 60 * 24); // Days
    var now: Date = new Date(Date.now());
    var dayDiff = Math.floor((now.valueOf() - modifiedDate.valueOf()) / magicNumber);
    var timeSpanLabel = 'days';
    if (dayDiff > 0 && dayDiff < 30) {
      if (dayDiff === 1) timeSpanLabel = 'day';
    } else if (dayDiff === 0) {
      dayDiff = Math.floor((now.valueOf() - modifiedDate.valueOf()) / (1000 * 60 * 60));  // for hours
      timeSpanLabel = (dayDiff === 1) ? 'hour' : 'hours';
    } else if (dayDiff > 30 && dayDiff < 365) {
      dayDiff = Math.floor(dayDiff / 30);  // for months
      timeSpanLabel = (dayDiff === 1) ? 'month' : 'months';
    } else if (dayDiff > 365) {
      return `last modified on ${modifiedDate.getMonth() + 1}-${modifiedDate.getDate()}-${modifiedDate.getFullYear()}`;
    } else {
      return `last modified on ${modifiedDate.getMonth() + 1}-${modifiedDate.getDate()}-${modifiedDate.getFullYear()}`;
    }

    return `${dayDiff} ${timeSpanLabel} ago`;
  }


}
