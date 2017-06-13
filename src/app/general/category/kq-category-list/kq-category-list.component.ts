import {Component, OnInit, Output, EventEmitter} from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kq-category-list',
  templateUrl: './kq-category-list.component.html',
  styleUrls: ['./kq-category-list.component.css']
})
export class KqCategoryListComponent implements OnInit {

  @Output() onShowAddCategory: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  showAddCategory() {
    $(function () {
      $('.dropify').dropify();
    });
    this.onShowAddCategory.emit(true);
  }

}
