import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FileInfo } from '../models/file-info';
import { FILEINFOS } from '../models/mocks/mock-file-info';

@Injectable({
  providedIn: 'root'
})
export class FileInfoService {

  constructor() { }

  getFileInfos(): Observable<FileInfo[]> {
    // TODO: Get this from an API
    return of(FILEINFOS);
  }

}
