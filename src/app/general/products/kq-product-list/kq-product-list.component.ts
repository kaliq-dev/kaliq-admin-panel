import {Component, OnInit, Output, EventEmitter} from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kq-product-list',
  templateUrl: './kq-product-list.component.html',
  styleUrls: ['./kq-product-list.component.css']
})
export class KqProductListComponent implements OnInit {
  @Output() onShowProductAddForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    $(function () {
      // Datatables
      $('#example1').DataTable({
        "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
        responsive: true,
        "autoWidth": false
      });

    })
  }


  showAddProduct(){
    $(function () {
      $('.dropify').dropify();
    });
    this.onShowProductAddForm.emit(true);
  }

}
