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

  constructor(private sensorService: SensorService) {
    // this.sensorData = sensorService.getSensorData()
    sensorService.getSensorDataAsync().subscribe(data=>this.sensorData=data)
  }

  ngOnInit(): void {
  }

}
