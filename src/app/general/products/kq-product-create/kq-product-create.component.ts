import {Component, OnInit} from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kq-product-create',
  templateUrl: './kq-product-create.component.html',
  styleUrls: ['./kq-product-create.component.css']
})
export class KqProductCreateComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    $(function () {

      $('.dropify').dropify();
      $('.dropify_2').dropify();

    });
  }

}
