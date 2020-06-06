import { Injectable } from '@angular/core';
import {SensorData} from './SensorData';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  sensorData: SensorData[] = []

  constructor() {
    for(let i=0;i<10;i++)
      this.sensorData.push({id: i,temp: '20'})
  }
  getSensorData():SensorData[]{
    return this.sensorData;
  }
}
