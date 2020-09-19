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

  sensorDataUrlSensor = 'http://wsi.ovh/json?sensor='

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
  getSensorDataHttp(sensorNo: number):Observable<SensorData[]>{
    const data = this.http.get<SensorData[]>(`${this.sensorDataUrlSensor}${sensorNo}`).
    pipe(catchError(err=>{
      console.log(`Coś poszło nie tak...${err.message}`)
      return of(this.sensorData)
    }))
    return data
  }
}
