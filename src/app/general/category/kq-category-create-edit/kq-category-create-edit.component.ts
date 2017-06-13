import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-kq-category-create-edit',
  templateUrl: './kq-category-create-edit.component.html',
  styleUrls: ['./kq-category-create-edit.component.css']
})
export class KqCategoryCreateEditComponent implements OnInit {

  public categoryCreateEditForm: FormGroup;
  public subCategoryList: any[] = [];
  public isShowAddCategory = false;

  constructor(private fb: FormBuilder) {
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

  submitForm() {
    console.log(this.categoryCreateEditForm.value);
  }


}
