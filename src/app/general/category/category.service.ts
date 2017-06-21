import {Injectable} from '@angular/core';
import {CustomHttpService} from '../../custom-http.service';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  private categoryUrl = environment.api_server + 'category/';

  constructor(private http: CustomHttpService) {
  }

  public create(data: any) {
    let url = this.categoryUrl + 'create/';
    return this.http.post(url, data).map((res) => res.json());
  }

  public readAll() {
    return this.http.get(this.categoryUrl).map((res) => res.json());
  }

  public deleteById(id) {
    let url = this.categoryUrl + 'delete/' + id;
    return this.http.delete(url).map((res) => res.json());
  }


}
