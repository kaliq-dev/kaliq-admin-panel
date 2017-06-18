import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UploadService} from "../../upload.service";
import {environment} from '../../../../environments/environment';
import {BrandService} from '../brand.service';
import {Brand} from '../brand';
import * as _ from 'underscore';

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
  public newBrand: Brand;

  public progressBarVisibility = true;
  public isSubmitted = false;
  public isNotSubmitted = false;
  public uploadProgress: any;
  public uploadRoute = environment.api_server + 'brand/upload-image';

  constructor(private fb: FormBuilder, private uploadService: UploadService, private brandService: BrandService) {
  }

  ngOnInit() {
    this.isNotSubmitted = false;
    this.isSubmitted = false;
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
    this.isSubmitted = false;
    this.isNotSubmitted = false;
    this.isShowAddBrand = true;
  }

  getFile(event: any) {
    this.fileInput = event;
    this.brandImageList = this.uploadService.getFile(this.fileInput);
    this.progressBarVisibility = true;
  }

  createNewBrand() {
    let data = {
      name: this.brandCreateEditForm.value.name,
      brandImageList: _.pluck(this.brandImageList, 'name')
    }
    this.brandService.create(data)
      .subscribe(
        (res) => {
          if (res.data) {
            this.newBrand = res.data;
            this.brandImageList = [];
            this.brandCreateEditForm.reset();
            this.isSubmitted = true;
          } else {
            this.isSubmitted = false;
            this.isNotSubmitted = true;
          }
        },
        (err) => {
          console.log('Error in create New Brand');
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
