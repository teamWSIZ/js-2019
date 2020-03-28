import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.less']
})
export class ArraysComponent implements OnInit {
  originalNumbers: number[][] = [[1, 2, 3, 4], [3, 4, 7, 5], [1, 2, 1, 1], [3, 4, 8, 5]];
  array: number[][] = [[]];
  originalNumbers1D = [1,2,3,4,5,6,7,8,9,10];
  array1: number[] = [1,2,3,4,5,6,7,8,9,10];
  array1Dinfo = '';
  numbersSet: Set<number> = new Set<number>()

  constructor() {
  }

  ngOnInit(): void {
    this.array = this.originalNumbers;
    this.evaluateSquares();
    this.setupArray1();
  }
  setupArray1():void{
    this.array1 = [1,2,3,4,5,5,6,7,8,8,9,10]
    this.numbersSet = new Set<number>(this.array1);
  }
  evenElements():void {
    this.array1 = this.originalNumbers1D.filter(v=>v%2===0);
  }
  oddElements():void {
    this.array1 = this.originalNumbers1D.filter(v=>v%2===1);
  }
  originalArray():void{
    this.array = this.originalNumbers;
  }
  evaluateSquares():void {
    this.array=this.originalNumbers.map(row=>row.map(element=>element*element))
  }
  evaluateQubes():void{
    this.array = this.originalNumbers;
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
