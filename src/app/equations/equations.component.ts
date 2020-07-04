import { Component, OnInit } from '@angular/core';
import {SensorData} from '../SensorData';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-equations',
  templateUrl: './equations.component.html',
  styleUrls: ['./equations.component.less']
})
export class EquationsComponent implements OnInit {
  functionData : Number[] = []

  chartOptions = {responsive: true};
  chartDataLinearEquation = [
    {data: [], label: 'linear equation'},
    // {data: [2,3,3], label: 'y'},
  ];

  chartDataTemperatureType='line'
  chartLabel: Label[] = []


  constructor() {
    for(let i=0;i<100;i++){
      this.functionData.push(i)
    }
  }

  ngOnInit() {
    this.getEquationData()
  }

  getEquationData():void{
    this.functionData.forEach(number=>{
      this.chartDataLinearEquation[0].data.push(number)
      this.chartLabel.push(number.toString())

    })
  }

}
