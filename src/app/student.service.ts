import { Injectable } from '@angular/core';
import {Student} from './student';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Student[] = [{name: 'Przemysław', surname: 'Stokłosa', height: 184}]

  constructor() {
    for(let i=10;i<20;i++){
      this.students.push({name: 'Przemysław', surname: 'Stokłosa'+i, height: 165+i})
    }
    for(const student of this.students){
      console.log('service: '+student.name+' '+student.surname)
    }
  }
  getStudents():Student[]{
    return this.students;
  }
  getStudentsRx():Observable<Student[]>{
    return of(this.students);
  }
}
