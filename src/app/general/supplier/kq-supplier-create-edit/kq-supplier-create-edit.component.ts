import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {UploadService} from "../../upload.service";
import * as _ from "underscore";
import {SupplierService} from "../supplier.service";
import {Supplier} from '../supplier';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kq-supplier-create-edit',
  templateUrl: './kq-supplier-create-edit.component.html',
  styleUrls: ['./kq-supplier-create-edit.component.css']
})
export class KqSupplierCreateEditComponent implements OnInit {

  public supplierCreateEditForm: FormGroup;
  public isShowAddSupplier = false;

  public progressBarVisibility = true;
  public supplierAttachmentList: any[] = [];
  public supplierAttachment: any;
  public newSupplier: Supplier;

  public fileInput: any;
  public isSubmitted = false;
  public isNotSubmitted = false;
  public uploadProgress: any;
  public uploadRoute = environment.api_server + 'supplier/upload-image';

  constructor(private supplierService: SupplierService, private fb: FormBuilder, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.isNotSubmitted = false;
    this.isSubmitted = false;
    this.buildForm();
    this.supplierAttachmentList.push([]);
  }

  buildForm() {
    this.supplierCreateEditForm = this.fb.group({
      name: ['', Validators.required],
      contact_no: [''],
      email: [''],
      supplierAttachmentList: ['']
    });
  }

  createNewSupplier() {
    let data = {
      name: this.supplierCreateEditForm.value.name,
      contact_no: this.supplierCreateEditForm.value.contact_no,
      email: this.supplierCreateEditForm.value.email,
      supplierAttachmentList: []
    }

    _.each(this.supplierAttachmentList, (item) => {
      if (!_.isEmpty(item)) {
        data.supplierAttachmentList.push(item[0].name);
      }
    });

    this.supplierService.create(data)
      .subscribe(
        (res) => {
          if (res.data) {
            this.newSupplier = res.data;
            this.supplierCreateEditForm.reset();
            this.isSubmitted = true;
            this.supplierAttachmentList.splice(1, this.supplierAttachmentList.length);
          } else {
            this.isSubmitted = true;
            this.isNotSubmitted = false;
          }
        },
        (err) => {
          console.log('Error in create new supplier');
        }
      )
  }

  submitForm() {
    if (this.supplierCreateEditForm.value.name) {
      _.each(this.supplierAttachmentList, (attachment) => {
        this.uploadService.uploadFile(this.uploadRoute, attachment)
          .then((res) => {
            if (res) {
              this.isSubmitted = true;
            } else {
              this.isSubmitted = false;
            }
          })
          .then(() => {
            console.log("File Upload Completed");
          })
          .catch((err) => {
            if (err) {
              this.isNotSubmitted = true;
            }
          });
      });
      this.createNewSupplier();
    }
  }

  cancel() {
    this.isShowAddSupplier = false;
    this.isSubmitted = false;
    this.isNotSubmitted = false;
  }

  addAttachment() {
    $(function () {
      $('.dropify').dropify();
    });
    this.supplierAttachmentList.push([]);
  }

  removeAttachment(index) {
    this.supplierAttachmentList.splice(index, 1);
  }

  showAddSupplier() {
    this.isShowAddSupplier = true;
  }

  // image file upload methods
  getFile(event: any, index) {
    $(function () {
      $('.dropify').dropify();
    });
    this.fileInput = event;
    this.supplierAttachment = this.uploadService.getFile(this.fileInput);
    this.supplierAttachmentList.splice(index, 0, this.supplierAttachment);
    this.progressBarVisibility = true;

    console.log(this.supplierAttachmentList);
  }

}




