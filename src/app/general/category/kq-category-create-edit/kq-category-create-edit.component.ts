import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kq-category-create-edit',
  templateUrl: './kq-category-create-edit.component.html',
  styleUrls: ['./kq-category-create-edit.component.css']
})
export class KqCategoryCreateEditComponent implements OnInit {

  public subCategoryList: any[] = [];
  public isShowAddCategory = false;

  constructor() {
  }

  ngOnInit() {
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

  cancel(){
    this.isShowAddCategory = false;
  }

}
