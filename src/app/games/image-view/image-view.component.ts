import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.less']
})
export class ImageViewComponent implements OnInit {
  @Input() image_url;

  constructor() { }

  ngOnInit() {
    console.log(`initialized with url:${this.image_url}`)
  }

}
