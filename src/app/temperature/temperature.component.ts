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
  chartData = [
    {data: [], label: 'temperatura'}
    // {data: [2,3,3], label: 'y'},
  ];
  chartLabel: Label[] = []

  constructor(private sensorService: SensorService) {
    // this.sensorData = sensorService.getSensorData()
    sensorService.getSensorDataHttp(1).subscribe(data=>{
      this.sensorData=data
      data.forEach((element,index)=>{
        this.chartData[0].data.push(Number(element.temp))
        this.chartLabel.push(''+index)
        console.log(`element: ${element.temp}`)
      })
    })
  }

  ngOnInit(): void {
  }

}
