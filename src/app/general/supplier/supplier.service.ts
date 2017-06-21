import {Injectable} from '@angular/core';
import {CustomHttpService} from '../../custom-http.service';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class SupplierService {

  private supplierUrl = environment.api_server + 'supplier/';

  constructor(private http: CustomHttpService) {
  }

  public create(data: any) {
    let url = this.supplierUrl + 'create';
    return this.http.post(url, data).map((res) => res.json());
  }

  public readAll() {
    return this.http.get(this.supplierUrl).map((res) => res.json());
  }

  public deleteById(id) {
    let url = this.supplierUrl + 'delete/' + id;
    return this.http.delete(url).map((res) => res.json());
  }

}
