import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-filters',
  templateUrl: './array-filters.component.html',
  styleUrls: ['./array-filters.component.less']
})
export class ArrayFiltersComponent implements OnInit {
  array1: number[] = [1,2,3,4,5,6,7,8,9,10];
  array1Dinfo = '';

  constructor() { }

  ngOnInit(): void {
  }

}
