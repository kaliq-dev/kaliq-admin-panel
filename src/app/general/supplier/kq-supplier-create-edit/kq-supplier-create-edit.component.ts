import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {UploadService} from "../../upload.service";
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

  public fileInput: any;
  public isSubmitted = true;
  public uploadProgress: any;
  public uploadRoute = environment.api_server + 'supplier/upload-image';


  constructor(private fb: FormBuilder, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.buildForm();
    this.supplierAttachmentList.push([]);
  }

  buildForm() {
    this.supplierCreateEditForm = this.fb.group({
      name: [''],
      contact: [''],
      email: [''],
      supplierAttachmentList: ['']
    });
  }

  createNewSupplier() {

  }

  submitForm() {
    if (this.supplierCreateEditForm.value.name) {
      this.uploadService.uploadFile(this.uploadRoute, this.supplierAttachmentList)
        .then((res) => {
          if (res) {
            this.createNewSupplier();
          } else {
            this.isSubmitted = false;
          }
        })
    }
  }

  cancel() {
    this.isShowAddSupplier = false;
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
    this.supplierCreateEditForm.patchValue({
      supplierAttachmentList: this.supplierAttachmentList
    });
  }

}
