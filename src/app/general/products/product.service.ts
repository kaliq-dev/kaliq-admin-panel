import {Injectable} from '@angular/core';
import {CustomHttpService} from '../../custom-http.service';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private productUrl = environment.api_server + 'product/';

  constructor(private http: CustomHttpService) {
  }

  public create(data: any) {
    let url = this.productUrl + 'create';
    return this.http.post(url, data).map((res) => res.json());
  }

  public readAll() {
    return this.http.get(this.productUrl).map((res) => res.json());
  }

  public deleteById(id) {
    let url = this.productUrl + 'delete/' + id;
    return this.http.delete(url).map((res) => res.json());
  }

}
