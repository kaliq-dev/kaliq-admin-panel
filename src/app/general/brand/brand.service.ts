import {Injectable} from '@angular/core';
import {CustomHttpService} from '../../custom-http.service';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class BrandService {

  private brandUrl = environment.api_server + 'brand/';

  constructor(private http: CustomHttpService) {
  }

  public create(data: any) {
    let url = this.brandUrl + 'create';
    return this.http.post(url, data).map((res) => res.json());
  }

}
