import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import * as _ from 'underscore';
import {Subscription} from 'rxjs/Subscription';
declare var require: any;

@Component({
  selector: 'app-thumb-image',
  templateUrl: './thumb-image.component.html',
  styleUrls: ['./thumb-image.component.css']
})
export class ThumbImageComponent implements OnInit {

  @Input() imageThumb: string;
  public thumb: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!_.isUndefined(changes['imageThumb'].currentValue) && !_.isEmpty(changes['imageThumb'].currentValue)) {
      let img = changes['imageThumb'].currentValue.split('.');
      img = img[0] + '.' + img[2];
      this.thumb = require("/home/abrar/Work/KALIQ/uploads/" + img);
    }
  }
}
