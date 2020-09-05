import { Component, OnInit } from '@angular/core';
import {SensorData} from '../SensorData';
import {Label} from 'ng2-charts';
import {EquationsService} from '../equations.service';

@Component({
  selector: 'app-equations',
  templateUrl: './equations.component.html',
  styleUrls: ['./equations.component.less']
})
export class EquationsComponent implements OnInit {
  functionData: Number[] = [];

  chartOptions = {responsive: true};
  chartDataLinearEquation = [
    {data: [], label: 'linear equation'},
    // {data: [2,3,3], label: 'y'},
  ];

  chartDataTemperatureType = 'line';
  chartLabel: Label[] = [];


  constructor(private equationService: EquationsService) {
    this.functionData = equationService.getFunctionData()
  }

  ngOnInit() {
    this.getEquationData()
  }

  getEquationData():void{
    this.functionData.forEach(number=>{
      this.chartDataLinearEquation[0].data.push(number)
      this.chartLabel.push(number.toString())
    })

    this.equationService.getDataHttp().subscribe(data=>{
      this.functionData = data

      this.functionData.forEach(number=>{
        this.chartDataLinearEquation[0].data.push(number)
        this.chartLabel.push(number.toString())
      })

    })
  }

}
