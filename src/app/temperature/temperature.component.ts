import { Component, OnInit } from '@angular/core';
import {SensorService} from '../../sensor.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.less']
})
export class TemperatureComponent implements OnInit {

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
  }

}
