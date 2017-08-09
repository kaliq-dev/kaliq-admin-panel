import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CustomHttpService} from '../custom-http.service';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class GeneralService {

  constructor(private http: CustomHttpService) { }

  //get images in base64
  public getBase64Images(data: any) {
    return this.http.post(environment.api_server + 'get-base64-images', data).map((res) => res.json());
  }

}
