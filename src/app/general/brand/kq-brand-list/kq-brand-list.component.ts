import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {BrandService} from "../brand.service";
import {Brand} from "../brand";
import {environment} from '../../../../environments/environment';
import * as _ from 'underscore';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kq-brand-list',
  templateUrl: './kq-brand-list.component.html',
  styleUrls: ['./kq-brand-list.component.css']
})
export class KqBrandListComponent implements OnInit {
  @Output() onShowAddBrand: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() newBrand: Brand;

  public brandList: Brand[] = [];
  public env = environment;

  constructor(private brandService: BrandService) {
  }

  ngOnInit() {
    this.brandService.readAll()
      .subscribe(
        (res) => {
          this.brandList = res.data;
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
    $(function () {
      $('.dropify').dropify();
    });
    this.onShowAddBrand.emit(true);
  }
}
