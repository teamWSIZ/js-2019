import { Injectable } from '@angular/core';
import {Student} from './student';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  students:Student[] = [{name: 'Piotr', surname: 'Stokłosa', height: 184}]

  constructor() {
    for(let i=10;i<20;i++){
      this.students.push({name: 'Piotr', surname: 'Stokłosa'+i, height: 165+i})
    }
    for(const student of this.students){
      console.log('service: '+student.name+' '+student.surname)
    }
  }

  getStudentsRx():Observable<Student[]>{
    return of(this.students);
  }
}
