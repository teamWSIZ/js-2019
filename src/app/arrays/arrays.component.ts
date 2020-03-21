import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.less']
})
export class ArraysComponent implements OnInit {
  originalNumbers: number[][] = [[1, 2, 3, 4], [3, 4, 7, 5], [1, 2, 1, 1], [3, 4, 8, 5]];
  array: number[][] = [[]];

  constructor() {
  }

  ngOnInit(): void {
    this.array = this.originalNumbers;
    this.evaluateSquares();
  }
  originalArray():void{
    this.array = this.originalNumbers;
  }
  evaluateSquares(): void {
  }

  f0(): void {
    for (let i = 0; i < 10; i++) {
      let element: number[] = [];
      for (let j = 0; j < i; j++) {
        element.push(j);
      }
      this.originalNumbers.push(element);
      element = []
    }
  }
}
