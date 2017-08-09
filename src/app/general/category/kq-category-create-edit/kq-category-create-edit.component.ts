import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {UploadService} from "../../upload.service";
import * as _ from "underscore";
import {CategoryService} from "../category.service";
import {Category} from '../category';

@Component({
  selector: 'app-kq-category-create-edit',
  templateUrl: './kq-category-create-edit.component.html',
  styleUrls: ['./kq-category-create-edit.component.css']
})
export class KqCategoryCreateEditComponent implements OnInit {

  public categoryCreateEditForm: FormGroup;
  public subCategoryList: any[] = [];
  public isShowAddCategory = false;

  public newCategory: Category;
  public categoryImage: any;
  public progressBarVisibility = true;
  public fileInput: any;
  public isSubmitted = false;
  public isNotSubmitted = false;
  public uploadRoute = environment.api_server + 'category/upload-image';

  public allSubCategoryCounter = 0;

  public allSubCategoryList: any[] = [];
  public categoryList: any[] = [];

  public onSubmitClick: boolean = false;

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.onSubmitClick = false;
    this.buildForm();
  }

  buildForm() {
    this.categoryCreateEditForm = this.fb.group({
      parentCategory: [Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      subCategory: []
    });
  }

  addSubCategory() {
    this.allSubCategoryCounter++;
    this.subCategoryList.push(this.categoryList[0].id);
  }

  removeCategory(index) {
    this.allSubCategoryCounter--;
    this.subCategoryList.splice(index, 1);
  }

  showAddCategory() {
    this.isShowAddCategory = true;
  }

  cancel() {
    this.onSubmitClick = false;
    this.isShowAddCategory = false;
  }

  createNewCategory() {
    let data = {
      name: this.categoryCreateEditForm.value.name,
      categoryImage: _.pluck(this.categoryImage, 'name'),
      parentCategory: this.categoryCreateEditForm.value.parentCategory,
      subCategory: this.categoryCreateEditForm.value.subCategory
    }

    if (!_.isEmpty(this.subCategoryList)) {
      data.subCategory = _.uniq(this.subCategoryList)
    }

    this.categoryService.create(data)
      .subscribe(
        (res) => {
          if (res.data) {
            this.newCategory = res.data;
            // this.categoryImage = undefined;
            // this.subCategoryList = [];
            this.allSubCategoryCounter = 0;
            this.categoryCreateEditForm.reset();
            this.isSubmitted = true;
            this.isShowAddCategory = false;
          } else {
            this.isSubmitted = false;
            this.isNotSubmitted = false;
          }
        },
        (err) => {
          console.log("error in create new category");
        }
      )
  }

  submitForm() {
    this.onSubmitClick = true;
    if (this.categoryCreateEditForm.valid) {
      this.uploadService.uploadFile(this.uploadRoute, this.categoryImage)
        .then((res) => {
          if (res) {
            this.isSubmitted = true;
          } else {
            this.isSubmitted = false;
          }
        })
        .then(() => {
          this.createNewCategory();
        })
        .catch((err) => {
          if (err) {
            this.isNotSubmitted = true;
          }
        });
    }
  }

  //image file upload methods
  getFile(event: any) {
    this.fileInput = event;
    this.categoryImage = this.uploadService.getFile(this.fileInput);
    this.categoryCreateEditForm.patchValue({
      image: this.categoryImage
    })
    this.progressBarVisibility = true;
  }

  //prepare parent category list
  categoryListData(data) {
    this.categoryList = data.event;
    this.allSubCategoryList = data.event;
    this.categoryCreateEditForm.patchValue({
      parentCategory: this.categoryList[this.categoryList.length - 1].id
    });
  }

  onSubCategoryChange(event: any, index) {
    this.subCategoryList[index] = parseInt(event.target.value);
  }

  createRange(number) {
    let items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}
