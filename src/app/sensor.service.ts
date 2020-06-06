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

  sensorDataUrl = 'http://wsi.ovh/json?limit=100&sensor=1'

  constructor(private http: HttpClient) {
    for(let i=0;i<10;i++)
      this.sensorData.push({id: i,temp: '20'})
  }
  getSensorData():SensorData[]{
    return this.sensorData;
  }
  getSensorDataAsync():Observable<SensorData[]>{
    return of(this.sensorData);
  }
  getSensorDataHttp():Observable<SensorData[]>{
    return this.http.get<SensorData[]>(this.sensorDataUrl).pipe(catchError(err=>{
      console.log(`Coś poszło nie tak...${err.message}`)
      return of(this.sensorData)
    }))
  }
}
