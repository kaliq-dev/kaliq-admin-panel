import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {UploadService} from "../../upload.service";
import {SupplierService} from "../../supplier/supplier.service";
import {CategoryService} from "../../category/category.service";
import {BrandService} from "../../brand/brand.service";
import {Supplier} from "../../supplier/supplier";
import {Category} from "../../category/category";
import {Brand} from "../../brand/brand";


import * as _ from "underscore";
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

  public progressBarVisibility = true;
  public productImageList: any[] = [];
  public productImage: any;

  public fileInput: any;
  public isSubmitted = false;
  public isNotSubmitted = false;
  public uploadProgress: any;
  public uploadRoute = environment.api_server + 'product/upload-image';

  public categoryList: Category[] = [];
  public brandList: Brand[] = [];
  public supplierList: Supplier[] = [];

  constructor(private categoryService: CategoryService, private brandService: BrandService, private supplierService: SupplierService, private fb: FormBuilder, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.getCategoryList();
    this.getBrandList();
    this.getSupplierList();
    this.buildForm();
    this.productImageList.push([]);
  }


  getCategoryList() {
    this.categoryService.readAll()
      .subscribe(
        (res) => {
          console.log(res);
        }
      )
  }

  getBrandList() {
    this.brandService.readAll()
      .subscribe(
        (res) => {
          console.log(res);
        }
      )
  }

  getSupplierList() {
    this.supplierService.readAll()
      .subscribe(
        (res) => {
          console.log(res);
        }
      )
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
      productImageList: ['']
    });
  }

  createNewProduct() {
    this.productCreateEditForm.patchValue({
      productImageList: this.productImageList
    });
    this.productImageList = [];
    this.productCreateEditForm.reset();
  }

  submitForm() {
    if (this.productCreateEditForm.value.name) {
      _.each(this.productImageList, (image) => {
        this.uploadService.uploadFile(this.uploadRoute, image)
          .then((res) => {
            if (res) {
              this.isSubmitted = true;
            } else {
              this.isSubmitted = false;
            }
          })
          .then(() => {
            console.log("File upload complete");
          })
          .catch((err) => {
            if (err) {
              this.isNotSubmitted = true;
            }
          });
      });
      this.createNewProduct();
    }
  }

  addGalleryImageList() {
    $(function () {
      $('.dropify').dropify();
    });
    this.productImageList.push([]);
  }

  removeGalleryImage(index) {
    this.productImageList.splice(index, 1);
  }

  showAddProduct() {
    this.isShowAddProduct = true;
  }

  cancel() {
    this.isShowAddProduct = false;
    this.isSubmitted = false;
    this.isNotSubmitted = false;
  }

  //images file upload methods
  getFile(event: any, index) {
    $(function () {
      $('.dropify').dropify();
    });
    this.fileInput = event;
    this.productImage = this.uploadService.getFile(this.fileInput);
    this.productImageList.splice(index, 0, this.productImage);
    this.progressBarVisibility = true;
    this.productCreateEditForm.patchValue({
      productImageList: this.productImageList
    });
  }
}
