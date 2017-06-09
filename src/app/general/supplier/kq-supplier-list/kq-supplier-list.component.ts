import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-kq-supplier-list',
  templateUrl: './kq-supplier-list.component.html',
  styleUrls: ['./kq-supplier-list.component.css']
})
export class KqSupplierListComponent implements OnInit {

  @Output() onShowAddSupplier: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  showAddSupplier(){
    this.onShowAddSupplier.emit(true);
  }



}
