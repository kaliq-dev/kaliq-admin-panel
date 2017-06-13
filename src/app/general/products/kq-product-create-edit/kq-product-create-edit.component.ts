import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kq-product-create-edit',
  templateUrl: './kq-product-create-edit.component.html',
  styleUrls: ['./kq-product-create-edit.component.css']
})
export class KqProductCreateEditComponent implements OnInit {

  public productCreateEditForm: FormGroup;
  public galleryImageList: any[] = [];
  public isShowAddProduct: boolean = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
    this.galleryImageList.push(1);
  }

  buildForm() {
    this.productCreateEditForm = this.fb.group({
      name: [''],
      supplier: [''],
      category: [''],
      brand: [''],
      price: [''],
      vat: [''],
      sale: [''],
      image: ['']
    });
  }

  submitForm() {
    console.log(this.productCreateEditForm.value);
  }

  addGalleryImageList() {
    $(function () {
      $('.dropify').dropify();
    });
    this.galleryImageList.push(1);
  }

  removeGalleryImage(index) {
    this.galleryImageList.splice(index, 1);
  }

  showAddProduct() {
    this.isShowAddProduct = true;
  }

  cancel() {
    this.isShowAddProduct = false;
  }
}
