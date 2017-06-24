import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {UploadService} from "../../upload.service";
import {SupplierService} from "../../supplier/supplier.service";
import {CategoryService} from "../../category/category.service";
import {BrandService} from "../../brand/brand.service";
import {Supplier} from "../../supplier/supplier";
import {Category} from "../../category/category";
import {Brand} from "../../brand/brand";
import {ProductService} from '../product.service';
import {Product} from "../product";

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
  public image_list: any[] = [];
  public productImage: any;

  public fileInput: any;
  public uploadProgress: any;
  public uploadRoute = environment.api_server + 'product/upload-image';

  public categoryList: Category[] = [];
  public brandList: Brand[] = [];
  public supplierList: Supplier[] = [];

  public isSubmitted = false;
  public isNotSubmitted = false;

  public newProduct: Product;

  constructor(private productService: ProductService, private categoryService: CategoryService, private brandService: BrandService, private supplierService: SupplierService, private fb: FormBuilder, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.getCategoryList();
    this.getBrandList();
    this.getSupplierList();
    this.buildForm();
    this.image_list.push([]);
  }


  getCategoryList() {
    this.categoryService.readAll()
      .subscribe(
        (res) => {
          this.categoryList = res.data;
        }
      );
  }

  getBrandList() {
    this.brandService.readAll()
      .subscribe(
        (res) => {
          this.brandList = res.data;
        }
      );
  }

  getSupplierList() {
    this.supplierService.readAll()
      .subscribe(
        (res) => {
          this.supplierList = res.data;
        }
      );
  }

  buildForm() {
    this.productCreateEditForm = this.fb.group({
      name: ['', Validators.required],
      supplier: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      vat: [''],
      sale: [''],
      image_list: ['']
    });
  }

  createNewProduct() {
    let data = {
      name: this.productCreateEditForm.value.name,
      supplier: this.productCreateEditForm.value.supplier,
      category: this.productCreateEditForm.value.category,
      brand: this.productCreateEditForm.value.brand,
      price: this.productCreateEditForm.value.price,
      vat: this.productCreateEditForm.value.vat,
      sale: this.productCreateEditForm.value.sale,
      image_list: []
    }

    _.each(this.image_list, (item) => {
      if (!_.isEmpty(item)) {
        data.image_list.push(item[0].name);
      }
    });

    this.productService.create(data)
      .subscribe(
        (res) => {
          if (res.data) {
            this.newProduct = res.data;
            this.isSubmitted = true;
            this.image_list = [];
            this.productCreateEditForm.reset();
          } else {
            this.isNotSubmitted = false;
          }
        },
        (err) => {
          console.log("Error in productService create");
        }
      );

  }

  submitForm() {
    if (this.productCreateEditForm.value.name) {
      _.each(this.image_list, (image) => {
        this.uploadService.uploadFile(this.uploadRoute, image)
          .then((res) => {
            if (res) {
              // this.isSubmitted = true;
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
    this.image_list.push([]);
  }

  removeGalleryImage(index) {
    this.image_list.splice(index, 1);
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
    this.image_list.splice(index, 0, this.productImage);
    this.progressBarVisibility = true;
    this.productCreateEditForm.patchValue({
      image_list: this.image_list
    });
  }
}
