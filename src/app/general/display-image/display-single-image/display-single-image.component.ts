import {Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
declare var require: any;

import * as _ from 'underscore';

@Component({
  selector: 'app-display-single-image',
  templateUrl: './display-single-image.component.html',
  styleUrls: ['./display-single-image.component.css']
})
export class DisplaySingleImageComponent implements OnInit {

  private subscription: Subscription;
  public img_path: any = undefined;
  @Input() image: any;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (!_.isUndefined(changes['image'].currentValue) && !_.isEmpty(changes['image'].currentValue)) {
      this.img_path = changes['image'].currentValue;
      console.log(this.img_path);
      // this.img_path = require("/home/abrar/Work/KALIQ/uploads/" + changes['image'].currentValue);
    }
  }

  close() {
    this.img_path = undefined;
  }

}
