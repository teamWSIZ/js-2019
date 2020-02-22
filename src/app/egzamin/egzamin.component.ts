import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-egzamin',
  templateUrl: './egzamin.component.html',
  styleUrls: ['./egzamin.component.less']
})
export class EgzaminComponent implements OnInit {
  inputArray: string;
  output: string;

  constructor() { }

  ngOnInit() {
  }

  compute() {
    let nums: string[] = this.inputArray.split(' ');
    let numbers = []
    let suma = 0;
    for(let nn of nums) {
      let x = parseInt(nn) % 2;
      numbers.push(x);
      suma += x;
    }
    if (suma == numbers.length) {
      /// są same 1
    }
    this.output = '' + suma;
  }
}
