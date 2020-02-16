import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.less']
})
export class GamesComponent implements OnInit {
  show_first = true;

  img_urls = [
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg15.deviantart.net%2F725b%2Fi%2F2015%2F197%2Fe%2F5%2Fheadhunter_zyra_splash_art_by_ropeplay-d91isfm.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fp0LPT78u7lc%2Fmaxresdefault.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Dk5p0tiBpmnYFmYLrgzG2QHaEc%26pid%3DApi&f=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FBROmhxhajmM%2Fmaxresdefault.jpg&f=1&nofb=1'
  ];
  zoom_url: string;
  img_index: number;

  constructor() { }

  ngOnInit() {
  }

  previousImage() {
    this.img_index -= 1;
    if (this.img_index<0) this.img_index = 0;
    this.zoom_url = this.img_urls[this.img_index];
  }
  nextImage() {
    this.img_index += 1;
    if (this.img_index>=this.img_urls.length) this.img_index = this.img_urls.length-1;
    this.zoom_url = this.img_urls[this.img_index];
  }

}
