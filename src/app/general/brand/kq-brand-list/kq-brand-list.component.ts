import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {BrandService} from "../brand.service";
import {Brand} from "../brand";
import {environment} from '../../../../environments/environment';
import * as _ from 'underscore';

declare var $: any;
declare var jQuery: any;
declare var require: any;

@Component({
  selector: 'app-kq-brand-list',
  templateUrl: './kq-brand-list.component.html',
  styleUrls: ['./kq-brand-list.component.css']
})
export class KqBrandListComponent implements OnInit {
  @Output() onShowAddBrand: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onEditBrand: EventEmitter<any> = new EventEmitter<any>();
  @Input() newBrand: Brand;

  public brandList: Brand[] = [];
  public env = environment;

  public image: any;

  constructor(private brandService: BrandService) {
  }

  ngOnInit() {
    this.image = undefined;
    this.brandService.readAll()
      .subscribe(
        (res) => {
          this.brandList = res.data.map((brand) => {
            if (brand.image_list.length > 0) {
              brand.image_list = brand.image_list.map((item) => {
                item = require("/home/abrar/Work/KALIQ/uploads/" + item);
                return item;
              });
            }
            return brand;
          })
        },
        (err) => {
          console.log("Error in readAll");
        }
      )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newBrand'].currentValue) {
      this.brandList.unshift(changes['newBrand'].currentValue);
    }
  }

  showAddBrand() {

    this.onShowAddBrand.emit(true);
  }

  deleteBrand(id, index) {
    this.brandService.deleteById(id)
      .subscribe(
        (res) => {
          this.brandList.splice(index, 1);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  editBrand(data) {
    this.onEditBrand.emit(data);
  }

  showImage(img: any) {
    let arr = img.split(".");
    this.image = arr[0] + '.' + arr[arr.length - 1];
  }
}
