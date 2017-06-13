import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {environment} from '../../environments/environment';

@Injectable()
export class UploadService {
  private progress$: Observable<number>;
  private progressObserver: any;
  private progress: number = 0;

  constructor() {
    this.progress$ = new Observable(observer => {
      this.progressObserver = observer;
    });
  }

  public getObserver(): Observable<number> {
    return this.progress$;
  }

  public upload(url: string, files: File[]): Promise<any> {
    return new Promise((resolve, reject) => {
      let formData: FormData = new FormData();
      let xhr: XMLHttpRequest = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };

      UploadService.setUploadUpdateInterval(500);

      xhr.open('POST', url, true);
      xhr.send(formData);

      xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);
        this.progressObserver.next(this.progress);
      }
    })
  }

  static setUploadUpdateInterval(interval: number): void {
    setInterval(() => {
    }, interval);
  }
}
