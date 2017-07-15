import {Injectable, Output, EventEmitter} from '@angular/core';
import {CustomHttpService} from '../custom-http.service';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import * as _ from 'underscore';

@Injectable()
export class AuthService {

  private isLoggedIn = false;

  constructor(private http: CustomHttpService) {
  }

  login(username, password) {
    if (username === 'kaliq' && password === 'admin') {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      return true;
    } else {
      localStorage.setItem("username", "");
      localStorage.setItem("password", "");
      return false;
    }
  }

  setLoginStatus(status) {
    this.isLoggedIn = status;
  }

  getLoginStatus() {
    if (localStorage.getItem("username") === 'kaliq' && localStorage.getItem("password") === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}

