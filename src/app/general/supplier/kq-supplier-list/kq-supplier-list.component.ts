import {Component, OnInit, Output, Input, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {SupplierService} from '../supplier.service';
import {Supplier} from '../supplier';
import * as _ from 'underscore';
import {GeneralService} from '../../general.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kq-supplier-list',
  templateUrl: './kq-supplier-list.component.html',
  styleUrls: ['./kq-supplier-list.component.css']
})
export class KqSupplierListComponent implements OnInit {

  @Output() onShowAddSupplier: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() newSupplier: Supplier;

  public supplierList: Supplier[] = [];
  public env = environment;
  public image: any;

  constructor(private supplierService: SupplierService) {
  }

  ngOnInit() {
    this.getAllSuppliers();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newSupplier'].currentValue) {
      this.getAllSuppliers();
      // this.supplierList.unshift(changes['newSupplier'].currentValue);
    }
  }

  getAllSuppliers() {
    this.image = undefined;
    this.supplierService.readAll()
      .subscribe(
        (res) => {
          this.supplierList = res.data;
        },
        (err) => {
          console.log("Error in readAll");
        }
      )
  }

  showAddSupplier() {
    $(function () {
      $('.dropify').dropify();
    });
    this.onShowAddSupplier.emit(true);
  }

  deleteSupplier(id, index) {
    this.supplierService.deleteById(id)
      .subscribe(
        (res) => {
          this.supplierList.splice(index, 1);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  showImage(x: any) {
    this.image = x;
  }
}
