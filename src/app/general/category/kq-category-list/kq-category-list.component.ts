import {Component, OnInit, Output, EventEmitter} from '@angular/core';

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
    this.onShowAddCategory.emit(true);
  }

}
