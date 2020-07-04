import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquationsService {
  functionData : Number[] = []

  constructor(private http: HttpClient) {
    for(let i=100;i<200;i++){
      this.functionData.push(i)
    }
  }

  getFunctionData():Number[]{
    return this.functionData
  }
}
