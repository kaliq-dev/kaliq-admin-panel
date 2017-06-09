import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kq-supplier-create-edit',
  templateUrl: './kq-supplier-create-edit.component.html',
  styleUrls: ['./kq-supplier-create-edit.component.css']
})
export class KqSupplierCreateEditComponent implements OnInit {
  public attachmentList: any[] = [];
  public isShowAddSupplier = false;

  constructor() {
  }

  ngOnInit() {
    this.attachmentList.push(1);
  }

  cancel() {
    this.isShowAddSupplier = false;
  }

  addAttachment() {
    this.attachmentList.push(1);
  }

  removeAttachment(index) {
    this.attachmentList.splice(index, 1);
  }

  showAddSupplier() {
    this.isShowAddSupplier = true;
  }

}
