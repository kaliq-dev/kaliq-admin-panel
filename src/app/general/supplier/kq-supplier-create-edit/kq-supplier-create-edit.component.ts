import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kq-supplier-create-edit',
  templateUrl: './kq-supplier-create-edit.component.html',
  styleUrls: ['./kq-supplier-create-edit.component.css']
})
export class KqSupplierCreateEditComponent implements OnInit {

  public supplierCreateEditForm: FormGroup;
  public attachmentList: any[] = [];
  public isShowAddSupplier = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
    this.attachmentList.push(1);
  }

  buildForm() {
    this.supplierCreateEditForm = this.fb.group({
      name: [''],
      contact: [''],
      email: [''],
      attachment: ['']
    });
  }

  submitForm() {
    console.log(this.supplierCreateEditForm.value);
  }

  cancel() {
    this.isShowAddSupplier = false;
  }

  addAttachment() {
    $(function () {
      $('.dropify').dropify();
    });
    this.attachmentList.push(1);
  }

  removeAttachment(index) {
    this.attachmentList.splice(index, 1);
  }

  showAddSupplier() {
    this.isShowAddSupplier = true;
  }

}
