import { Component, OnInit } from '@angular/core';
import {Case} from "./model/case";

@Component({
  selector: 'app-ncov',
  templateUrl: './ncov.component.html',
  styleUrls: ['./ncov.component.less']
})
export class NcovComponent implements OnInit {
  // bit.do/2019cov
  confirmed = [1900,2800,4600, 6000, 7750, 9745, 11820];
  deaths = [56, 80, 106, 130, 170, 213, 259];
  chartOptions = {"responsive": true};
  chartData = [
    {data: [1,2,3], label: 'x'},
    // {data: [2,3,3], label: 'y'},
  ];
  chartLabels = ['A1', 'A2', 'A3', 'A4'];


  cases: Case[] = [];
  r = 1.21;
  constructor() { }

  add() {
    this.chartData[0].data.push(Math.random() * 10);
    // this.chartData[0].data = [4, 3, 0];
  }

  ngOnInit() {
    //new Date() --> aktualny czas w aktualnej strefie czasowej
    //new Date("2020-01-15") --> godzina 1am tego dnia w aktualnej strefie czasowej
    //new Date(2020,0,14) --> 14 stycznia (!!) 2020, o 0 godzinie akutalnego czasu
    for(let i=0; i<this.confirmed.length; i++) {
      this.cases.push(new Case(new Date(2020,0,25+i), this.confirmed[i], this.deaths[i]));
    }
  }

  calc(array) {
    for(let i=0; i<10; i+=1) {
      let last = array[array.length - 1];
      array.push(last * this.r);
    }
  }

  show_it(c: number) {
    if (c >= 1000000) {
      return '' + Math.round(c/1000)/1000 + ' mln';
    }
    return '' + Math.round(c);
  }

  show_date(i: number) {
    let day = 25 + i;
    if (day <= 31) {
      return day + ' Jan';
    }
    day -= 31;
    if (day <= 29) {
      return day + ' Feb';
    }
    day -= 29;
    return day + ' Mar';

  }

}
