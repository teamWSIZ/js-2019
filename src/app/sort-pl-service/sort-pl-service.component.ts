import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-sort-pl-service',
  templateUrl: './sort-pl-service.component.html',
  styleUrls: ['./sort-pl-service.component.less']
})
export class SortPlServiceComponent implements OnInit {

  students:Student[] = [{name: 'Przemysław', surname: 'Stokłosa', height: 174}]
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents()
    for(const student of this.students){
      console.log(student.name+' '+student.surname)
    }
  }
  sortuj() {
    this.students.sort((student1, student2)=>{
      if(student1.surname<student2.surname)
        return 1;
      if(student1.surname>student2.surname)
        return -1;
      return 0;
    })
  }

  sortuj1() {
    this.students.sort((student1, student2)=>{
      if(student1.surname>student2.surname)
        return 1;
      if(student1.surname<student2.surname)
        return -1;
      return 0;
    })
  }

  sortujPl() {
    const collator = new Intl.Collator('pl')
    this.students.sort((student1, student2)=>{
      return collator.compare(student2.surname,student1.surname);
    })
  }

  sortuj1Pl() {
    const collator = new Intl.Collator('pl')
    this.students.sort((student1, student2)=>{
      return collator.compare(student1.surname,student2.surname);
    })
  }
  sortujWzrost(){
    this.students.sort((student1,student2)=>{
      if(student1.height<student2.height)
        return 1;
      if(student1.height>student2.height)
        return -1;
      return 0;
    })
  }

}
