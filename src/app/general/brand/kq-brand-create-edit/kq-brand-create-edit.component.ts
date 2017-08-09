import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UploadService} from "../../upload.service";
import {environment} from '../../../../environments/environment';
import {BrandService} from '../brand.service';
import {Brand} from '../brand';
import * as _ from 'underscore';

declare var $: any;

@Component({
  selector: 'app-kq-brand-create-edit',
  templateUrl: './kq-brand-create-edit.component.html',
  styleUrls: ['./kq-brand-create-edit.component.css'],
})
export class KqBrandCreateEditComponent implements OnInit {

  public brandCreateEditForm: FormGroup;

  public createMode: boolean = false;
  public editMode: boolean = false;

  public isShowBrandForm: boolean = false;

  public fileInput: any;
  public brandImageList: any[] = [];
  public newBrand: Brand;

  public progressBarVisibility = true;
  public isSubmitted = false;
  public isNotSubmitted = false;
  public uploadProgress: any;
  public uploadRoute = environment.api_server + 'brand/upload-image';

  public onSubmitClick: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private uploadService: UploadService, private brandService: BrandService) {
  }

  ngOnInit() {
    this.onSubmitClick = false;
    this.createMode = true;
    this.isNotSubmitted = false;
    this.isSubmitted = false;
    this.buildForm();
  }

  buildForm() {
    this.brandCreateEditForm = this.fb.group({
      name: ['', Validators.required],
      brandImageList: ['']
    });
  }

  cancel() {
    this.onSubmitClick = false;
    this.isShowBrandForm = false;
  }

  showAddBrand() {
    $(function () {
      $('.dropify').dropify();
    });
    this.isSubmitted = false;
    this.isNotSubmitted = false;
    this.isShowBrandForm = true;
    this.brandImageList = [];
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
            this.isSubmitted = true;
          } else {
            this.isSubmitted = false;
            this.isNotSubmitted = true;
          }
        },
        (err) => {
          console.log('Error in create New Brand');
        },
        () => {
          this.brandCreateEditForm.reset();
          this.isShowBrandForm = false;
        }
      );
  }

  submitForm() {
    this.onSubmitClick = true;
    if (this.brandCreateEditForm.value.name && this.brandImageList.length > 0) {
      this.uploadService.uploadFile(this.uploadRoute, this.brandImageList)
        .then((res) => {
          if (res) {
            this.createNewBrand();
          } else {
            this.isNotSubmitted = true;
            this.isSubmitted = false;
          }
        });
    }
  }

  // edit / update methods
  editBrand(event: any) {
    $(function () {
      $('.dropify').dropify();
    });
    this.brandImageList = [];
    this.isShowBrandForm = true;
    this.createMode = false;
    this.editMode = true;
    this.brandImageList = event.image_list;
    this.brandCreateEditForm.patchValue({
      name: event.name
    });
  }

  update() {
    let data = {
      name: this.brandCreateEditForm.value.name,
      brandImageList: this.brandImageList
    }

  }

}
