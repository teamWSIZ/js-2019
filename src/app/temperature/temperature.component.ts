import { Component, OnInit } from '@angular/core';
import {SensorService} from '../sensor.service';
import {SensorData} from '../SensorData';

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

  constructor(private sensorService: SensorService) {
    // this.sensorData = sensorService.getSensorData()
    sensorService.getSensorDataHttp().subscribe(data=>{
      this.sensorData=data
      data.forEach(element=>{
        this.chartData[0].data.push(Number(element.temp))
        console.log(`element: ${element.temp}`)
      })
    })
  }

  ngOnInit(): void {
  }

}
