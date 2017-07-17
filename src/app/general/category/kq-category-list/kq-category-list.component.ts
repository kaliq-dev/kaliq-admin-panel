import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../category";
import * as _ from 'underscore';

declare var $: any;
declare var jQuery: any;
declare var require: any;

@Component({
  selector: 'app-kq-category-list',
  templateUrl: './kq-category-list.component.html',
  styleUrls: ['./kq-category-list.component.css']
})
export class KqCategoryListComponent implements OnInit {
  @Input() newCategory: Category;
  @Output() onShowAddCategory: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onCategoryListData: EventEmitter<Category[]> = new EventEmitter<Category[]>();

  public categoryList: Category[] = [];

  public image: any;


  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.readAll()
      .subscribe(
        (res) => {
          this.categoryList = res.data.map((category) => {
            if (category['image_list'].length > 0) {
              category['image_list'] = category['image_list'].map((item) => {
                item = require("/home/abrar/Work/KALIQ/uploads/" + item);
                return item;
              });
            }
            return category;
          });
          console.log(this.categoryList);
        },
        (err) => {
          console.log("error in readAll");
        },
        () => {
          this.onCategoryListData.emit(this.categoryList);
        }
      );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newCategory'].currentValue) {
      this.getAllCategories();
      // this.categoryList.unshift(changes['newCategory'].currentValue);
    }
  }

  showAddCategory() {
    $(function () {
      $('.dropify').dropify();
    });
    this.onShowAddCategory.emit(true);
  }

  deleteCategory(id, index) {
    this.categoryService.deleteById(id)
      .subscribe(
        (res) => {
          this.categoryList.splice(index, 1);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  showImage(img: any) {
    let arr = img.split(".");
    this.image = arr[0] + '.' + arr[arr.length - 1];
  }

}
