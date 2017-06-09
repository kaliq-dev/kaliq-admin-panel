import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-kq-category-create',
  templateUrl: './kq-category-create.component.html',
  styleUrls: ['./kq-category-create.component.css']
})
export class KqCategoryCreateComponent implements OnInit {

  public subCategoryList: any[] = [];

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

}
