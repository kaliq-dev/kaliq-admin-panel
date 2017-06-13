import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UploadService} from "../../upload.service";
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-kq-brand-create-edit',
  templateUrl: './kq-brand-create-edit.component.html',
  styleUrls: ['./kq-brand-create-edit.component.css']
})
export class KqBrandCreateEditComponent implements OnInit {

  public brandCreateEditForm: FormGroup;
  public isShowAddBrand: boolean = false;
  public fileInput: any;
  public brandImageList: any[] = [];

  public progressBarVisibility = true;
  public isSubmitted = true;
  public uploadProgress: any;
  public uploadRoute = environment.api_server + 'brand/create';

  constructor(private fb: FormBuilder, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.brandCreateEditForm = this.fb.group({
      name: [''],
      image: ['']
    });
  }

  cancel() {
    this.isShowAddBrand = false;
  }

  showAddBrand() {
    this.isShowAddBrand = true;
  }


  getFile(event: any) {
    this.fileInput = event;
    const FileList: FileList = this.fileInput.target.files;
    for (let i = 0; i < FileList.length; i++) {
      this.brandImageList.push(FileList.item(i));
    }
    this.progressBarVisibility = true;
    // this.brandCreateEditForm.patchValue({
    //   image: this.brandImageList
    // });
  }

  public async uploadFile(): Promise<any> {
    let result: any;
    if (!this.brandImageList.length) {
      return;
    }
    this.isSubmitted = true;
    this.uploadService.getObserver()
      .subscribe(progress => {
        this.uploadProgress = progress;
      });

    try {
      result = await this.uploadService.upload(this.uploadRoute, this.brandImageList);
    } catch (error) {
      document.write(error);
    }
    //
    // if (!result['images']) {
    //   return;
    // }

    this.saveUploadedFilesData(result);
  }

  saveUploadedFilesData(result: any) {
    console.log(result);
  }

  submitForm() {
    this.uploadFile();
    // console.log(this.brandCreateEditForm.value);
  }
}
