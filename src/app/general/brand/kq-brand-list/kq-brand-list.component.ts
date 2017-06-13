import {Component, OnInit, Output, EventEmitter} from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kq-brand-list',
  templateUrl: './kq-brand-list.component.html',
  styleUrls: ['./kq-brand-list.component.css']
})
export class KqBrandListComponent implements OnInit {
  @Output() onShowAddBrand: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  showAddBrand() {
    $(function () {
      $('.dropify').dropify();
    });
    this.onShowAddBrand.emit(true);
  }
}
