import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-kq-supplier-dashboard',
  templateUrl: './kq-supplier-dashboard.component.html',
  styleUrls: ['./kq-supplier-dashboard.component.css']
})
export class KqSupplierDashboardComponent implements OnInit {

  private subscription: Subscription;
  public title: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params) => {
        if (params['slug']) {
          this.title = params['slug'];
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
