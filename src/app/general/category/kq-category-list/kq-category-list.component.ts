import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../category";
declare var $: any;
declare var jQuery: any;

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

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.readAll()
      .subscribe(
        (res) => {
          this.categoryList = res;
          this.onCategoryListData.emit(res);
        },
        (err) => {
          console.log("error in readAll");
        }
      )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newCategory'].currentValue) {
      this.getAllCategories();
    }
  }

  showAddCategory() {
    $(function () {
      $('.dropify').dropify();
    });
    this.onShowAddCategory.emit(true);
  }

}
