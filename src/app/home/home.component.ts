import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  user = 'Wu Xilao';
  x = 10;
  age: string;
  ageint: number;

  constructor() { }

  ngOnInit() {
  }

  increaseTemperature() {
    this.x = this.x + 1;
  }

  decreaseTemperature() {
    this.x = this.x - 1;
  }

  submit() {
    const myString = '1,2,3,8';
    const splits = myString.split(',');
    for(let s of splits) {
      const x = parseInt(s);
      console.log(x * x);
    }

    this.ageint = parseInt(this.age);
  }
}
