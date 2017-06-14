import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UploadService} from "../../upload.service";
import {environment} from '../../../../environments/environment';
import {BrandService} from '../brand.service';

@Component({
  selector: 'app-kq-brand-create-edit',
  templateUrl: './kq-brand-create-edit.component.html',
  styleUrls: ['./kq-brand-create-edit.component.css'],
})
export class KqBrandCreateEditComponent implements OnInit {

  public brandCreateEditForm: FormGroup;
  public isShowAddBrand: boolean = false;
  public fileInput: any;
  public brandImageList: any[] = [];

  public progressBarVisibility = true;
  public isSubmitted = true;
  public uploadProgress: any;
  public uploadRoute = environment.api_server + 'brand/upload-image';

  constructor(private fb: FormBuilder, private uploadService: UploadService, private brandService: BrandService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.brandCreateEditForm = this.fb.group({
      name: [''],
      brandImageList: ['']
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
    this.brandImageList = this.uploadService.getFile(this.fileInput);
    this.progressBarVisibility = true;
    this.brandCreateEditForm.patchValue({
      brandImageList: this.brandImageList
    });
  }


  createNewBrand() {
    this.brandService.create(this.brandCreateEditForm.value)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log("Error in create New Brand");
        }
      )
  }

  submitForm() {
    if (this.brandCreateEditForm.value.name) {
      this.uploadService.uploadFile(this.uploadRoute, this.brandImageList)
        .then((res) => {
          if (res) {
            this.createNewBrand();
          } else {
            this.isSubmitted = false;
          }
        })
    }
  }
}
