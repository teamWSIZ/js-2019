import { Injectable } from '@angular/core';
import {SensorData} from './SensorData';
import {PlotData} from './PlotData';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlotServiceService {
  plotData: PlotData[] = []
  url = "http://localhost:3000/chart_data"

  constructor(private http: HttpClient) { }

  getPlotData():Observable<PlotData[]>{
    const data = this.http.get<PlotData[]>(`${this.url}`).
    pipe(catchError(err=>{
      console.log(`Coś poszło nie tak...${err.message}`)
      return of(this.plotData)
    }))
    return data
  }
}
