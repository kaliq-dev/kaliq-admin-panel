import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import * as _ from 'underscore';
import {environment} from '../../../../environments/environment';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kq-product-list',
  templateUrl: './kq-product-list.component.html',
  styleUrls: ['./kq-product-list.component.css']
})
export class KqProductListComponent implements OnInit {
  @Output() onShowProductAddForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  public productList: Product[] = [];
  public env = environment;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    $(function () {
      // Datatables
      $('#example1').DataTable({
        "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
        responsive: true,
        "autoWidth": false
      });
    });

    this.getProductList();
  }

  showAddProduct() {
    $(function () {
      $('.dropify').dropify();
    });
    this.onShowProductAddForm.emit(true);
  }


  getProductList() {
    this.productService.readAll()
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log("Error in productService readAll");
        }
      )
  }

}
