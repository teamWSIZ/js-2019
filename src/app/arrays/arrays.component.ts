import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.less']
})
export class ArraysComponent implements OnInit {
  array: number[][]=[[1,2],[3,4],[1,2],[3,4]];

  constructor() { }

  ngOnInit(): void {
  }

}
