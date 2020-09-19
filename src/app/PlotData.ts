import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SensorData} from './SensorData';
import {catchError} from 'rxjs/operators';

export class PlotData{
    x: number
    y: number
}
