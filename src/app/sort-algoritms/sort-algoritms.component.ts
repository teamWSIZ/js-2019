import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sort-algoritms',
  templateUrl: './sort-algoritms.component.html',
  styleUrls: ['./sort-algoritms.component.less']
})
export class SortAlgoritmsComponent implements OnInit {
  array1: number[] = [1, 20, 10, 10, 3, 4, 5, 6, 7, 8, 9, 10];
  originalNumbers1D: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.array1)
    this.array1.sort();
    console.log(this.array1)
  }

}
