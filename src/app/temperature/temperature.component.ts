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

  chartDataHumidity = [
    {data: [], label: 'wilgotność 1'},
    {data: [], label: 'wilgotność 2'},
    // {data: [2,3,3], label: 'y'},
  ];
  chartLabel: Label[] = []

  constructor(private sensorService: SensorService) {
    // this.sensorData = sensorService.getSensorData()
    this.getSensorData(1)
    this.getSensorData(2)
  }
  getSensorData(sensorNo: number):void{
    this.sensorService.getSensorDataHttp(sensorNo).subscribe(data=>{
      // this.sensorData=data
      data.forEach((element,index)=>{
        this.chartDataTemperature[sensorNo-1].data.push(Number(element.temp))
        this.chartDataHumidity[sensorNo-1].data.push(Number(element.wilg))
        if(this.chartLabel.length<data.length)
          this.chartLabel.push(''+index)
        console.log(`element: ${element.temp}`)
      })
    })
  }

  ngOnInit(): void {
  }

  changeType() {
    this.chartDataTemperatureType = this.chartDataTemperatureType==='line'?'bar':'line'
  }
}
