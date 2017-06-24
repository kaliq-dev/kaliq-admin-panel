import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-kq-admin-panel-dashboard',
  templateUrl: './kq-admin-panel-dashboard.component.html',
  styleUrls: ['./kq-admin-panel-dashboard.component.css']
})
export class KqAdminPanelDashboardComponent implements OnInit {

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
