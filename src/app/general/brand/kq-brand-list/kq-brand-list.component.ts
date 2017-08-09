import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {BrandService} from "../brand.service";
import {Brand} from "../brand";
import {environment} from '../../../../environments/environment';
import * as _ from 'underscore';
import {GeneralService} from '../../general.service';

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

  constructor(private generalService: GeneralService, private brandService: BrandService) {
  }

  ngOnInit() {
    this.getAllBrands();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newBrand'].currentValue) {
      this.getAllBrands();
    }
  }

  getAllBrands() {
    this.image = undefined;
    this.brandService.readAll()
      .subscribe(
        (res) => {
          this.brandList = res.data;
          this.generalService.getBase64Images({data: this.brandList})
            .subscribe(
              (res) => {
                this.brandList = res.data;
              },
              (err) => {
                console.log("Error in getting base64 images");
              }
            );
        },
        (err) => {
          console.log("Error in readAll");
        }
      )
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
    this.image = img;
    // let arr = img.split(".");
    // this.image = arr[0] + '.' + arr[arr.length - 1];
  }
}
