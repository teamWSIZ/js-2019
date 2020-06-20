import { Component, OnInit } from '@angular/core';
import {SensorService} from '../sensor.service';
import {SensorData} from '../SensorData';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.less']
})
export class TemperatureComponent implements OnInit {
  sensorData : SensorData[] = []

  chartOptions = {responsive: true};
  chartDataTemperature = [
    {data: [], label: 'temperatura 1'},
    {data: [], label: 'temperatura 2'},
    // {data: [2,3,3], label: 'y'},
  ];
  chartDataTemperatureType='line'
  chartDataTypeNo = 0

  chartDataHumidity = [
    {data: [], label: 'wilgotność 1'},
    {data: [], label: 'wilgotność 2'},
    // {data: [2,3,3], label: 'y'},
  ];
  chartLabel: Label[] = []
  chartDataTemperatureDifference = [
    {data: [], label: 'wylot'},
    {data: [], label: 'wlot'}
  ]
  chartLabelTD: Label[] = []

  constructor(private sensorService: SensorService) {
    // this.sensorData = sensorService.getSensorData()
    this.getSensorData(1,0)
    this.getSensorData(2,1)
    this.getTemperatureData(3,0)
    this.getTemperatureData(4,1)
  }
  getSensorData(sensorNo: number, plotLine: number):void{
    this.sensorService.getSensorDataHttp(sensorNo).subscribe(data=>{
      // this.sensorData=data
      data.forEach((element,index)=>{
        this.chartDataTemperature[plotLine].data.push(Number(element.temp))
        this.chartDataHumidity[plotLine].data.push(Number(element.wilg))
        if(this.chartLabel.length<data.length)
          this.chartLabel.push(''+index)
        // console.log(`element: ${element.temp}`)
      })
    })
  }

  getTemperatureData(sensorNo: number, plotLine: number):void{
    this.sensorService.getSensorDataHttp(sensorNo).subscribe(data=>{
      // this.sensorData=data
      data.forEach((element,index)=>{
        this.chartDataTemperatureDifference[plotLine].data.push(Number(element.temp))
        if(this.chartLabelTD.length<data.length)
          this.chartLabelTD.push(''+index)
        console.log(`element: ${element.temp}`)
      })
    })
  }
  getTemperatureDifference():void{
  }

  ngOnInit(): void {
  }

  changeType() {
    if(this.chartDataTypeNo<=2)
      this.chartDataTypeNo++
    else
      this.chartDataTypeNo=0
    switch(this.chartDataTypeNo){
      case 0:
        this.chartDataTemperatureType='line'
        break;
      case 1:
        this.chartDataTemperatureType='bar'
        break;
      case 2:
        this.chartDataTemperatureType='radar'
        break;
    }
  }
}
