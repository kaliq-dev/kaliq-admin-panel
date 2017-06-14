import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {UploadService} from "../../upload.service";
import * as _ from "underscore";

@Component({
  selector: 'app-kq-category-create-edit',
  templateUrl: './kq-category-create-edit.component.html',
  styleUrls: ['./kq-category-create-edit.component.css']
})
export class KqCategoryCreateEditComponent implements OnInit {

  public categoryCreateEditForm: FormGroup;
  public subCategoryList: any[] = [];
  public isShowAddCategory = false;

  public categoryImage: any;
  public progressBarVisibility = true;
  public fileInput: any;
  public isSubmitted = false;
  public isNotSubmitted = false;
  public uploadRoute = environment.api_server + 'category/upload-image';

  constructor(private fb: FormBuilder, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.categoryCreateEditForm = this.fb.group({
      parentCategory: [''],
      name: [''],
      image: [''],
      subCategory: ['']
    })
  }

  addSubCategory() {
    this.subCategoryList.push(1);
  }

  removeCategory(index) {
    this.subCategoryList.splice(index, 1);
  }

  showAddCategory() {
    this.isShowAddCategory = true;
  }

  cancel() {
    this.isShowAddCategory = false;
  }

  createNewCategory() {
    this.categoryCreateEditForm.patchValue({
      image: this.categoryImage
    });
    console.log(this.categoryCreateEditForm.value);
    this.categoryImage = undefined;
    this.categoryCreateEditForm.reset();
  }

  submitForm() {
    if (this.categoryCreateEditForm.value.name) {
      this.uploadService.uploadFile(this.uploadRoute, this.categoryImage)
        .then((res) => {
          if (res) {
            this.isSubmitted = true;
          } else {
            this.isSubmitted = false;
          }
        })
        .then(() => {
          console.log("File upload complete");
        })
        .catch((err) => {
          if (err) {
            this.isNotSubmitted = true;
          }
        });
      this.createNewCategory();
    }
  }


  //image file upload methods
  getFile(event: any) {
    this.fileInput = event;
    this.categoryImage = this.uploadService.getFile(this.fileInput);
    this.progressBarVisibility = true;
  }


}
