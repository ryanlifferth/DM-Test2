import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserInfo } from '../models/user-info';
import { USERINFO } from '../models/mocks/mock-user-info';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }

  getUserInfo(): Observable<UserInfo> {
    // TODO: Get this from an API
    return of(USERINFO);
  }

}
