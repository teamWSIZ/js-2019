import { Injectable } from '@angular/core';
import {SensorData} from './SensorData';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  sensorData: SensorData[] = []

  sensorDataUrlSensor0 = 'http://wsi.ovh/json?sensor=1'

  constructor(private http: HttpClient) {
    for(let i=0;i<10;i++)
      this.sensorData.push({id: i,temp: '20', wilg: '40'})
  }
  getSensorData():SensorData[]{
    return this.sensorData;
  }
  getSensorDataAsync():Observable<SensorData[]>{
    return of(this.sensorData);
  }
  getSensorDataHttp():Observable<SensorData[]>{
    return this.http.get<SensorData[]>(this.sensorDataUrlSensor0).pipe(catchError(err=>{
      console.log(`Coś poszło nie tak...${err.message}`)
      return of(this.sensorData)
    }))
  }
}
