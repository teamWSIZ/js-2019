import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sort-algoritms',
  templateUrl: './sort-algoritms.component.html',
  styleUrls: ['./sort-algoritms.component.less']
})
export class SortAlgoritmsComponent implements OnInit {
  array1: number[] = [1, 100, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  originalNumbers1D: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.array1)
    // this.array1.sort((n1,n2)=>n1-n2);
    // console.log(this.array1)
    // [1, 100, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // [1, 2, 100, 3, 4, 5, 6, 7, 8, 9, 10]
    // [1, 2, 3, 100, 4, 5, 6, 7, 8, 9, 10]
    // [1, 2, 3, 4, 100, 5, 6, 7, 8, 9, 10]
    for(let i=0;i<this.array1.length-1;i++){
      const n0=this.array1[i];
      const n1=this.array1[i+1];
      if(n0>n1){
      }
      console.log(this.array1);
    }
  }

}
