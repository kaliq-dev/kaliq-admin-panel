import {Component, OnInit, Output, EventEmitter} from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kq-supplier-list',
  templateUrl: './kq-supplier-list.component.html',
  styleUrls: ['./kq-supplier-list.component.css']
})
export class KqSupplierListComponent implements OnInit {

  @Output() onShowAddSupplier: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  showAddSupplier() {
    $(function () {
      $('.dropify').dropify();
    });
    this.onShowAddSupplier.emit(true);
  }


}
