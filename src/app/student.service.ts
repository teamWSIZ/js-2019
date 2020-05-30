import { Injectable } from '@angular/core';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Student[] = [{name: 'Przemysław', surname: 'Stokłosa', height: 174}]

  constructor() {
    for(let i=0;i<10;i++){
      this.students.push({name: 'Przemysław', surname: 'Stokłosa'+i, height: 165+i})
    }
    this.students.push({name: 'Anna', surname: 'Łęcka',height: 200})
    this.students.push({name: 'Anna', surname: 'Lęcka', height: 201})

    for(const student of this.students){
      console.log('service: '+student.name+' '+student.surname)
    }
  }
  getStudents():Student[]{
    return this.students;
  }
}
