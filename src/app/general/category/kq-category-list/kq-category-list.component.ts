import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../category";
import * as _ from 'underscore';
import {GeneralService} from '../../general.service';

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

  constructor(private generalService: GeneralService, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.readAll()
      .subscribe(
        (res) => {
          this.categoryList = res.data;
          this.generalService.getBase64Images({data: this.categoryList})
            .subscribe(
              (res) => {
                this.categoryList = res.data;
              },
              (err) => {
                console.log("Error in getting base64 images");
              }
            )
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
    this.image = img;
  }

}
