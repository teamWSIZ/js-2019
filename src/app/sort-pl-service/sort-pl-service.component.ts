import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {Observable} from 'rxjs';
import {TeacherService} from '../teacher.service';

@Component({
  selector: 'app-sort-pl-service',
  templateUrl: './sort-pl-service.component.html',
  styleUrls: ['./sort-pl-service.component.less']
})
export class SortPlServiceComponent implements OnInit {

  persons:Student[] = []
  studentsRx:Observable<Student[]> = null
  constructor(private studentService: StudentService,
              private teacherService: TeacherService) { }

  ngOnInit(): void {
    // this.students = this.studentService.getStudents()
    this.studentsRx=this.studentService.getStudentsRx()
    this.studentsRx.subscribe(st=>this.persons.push(...st))
    this.teacherService.getStudentsRx().subscribe(st=>this.persons.push(...st))
    for(const student of this.persons){
      console.log(student.name+' '+student.surname)
    }
  }
  sortuj() {
    this.persons.sort((student1, student2)=>{
      if(student1.surname<student2.surname)
        return 1;
      if(student1.surname>student2.surname)
        return -1;
      return 0;
    })
  }

  sortuj1() {
    this.persons.sort((student1, student2)=>{
      if(student1.surname>student2.surname)
        return 1;
      if(student1.surname<student2.surname)
        return -1;
      return 0;
    })
  }

  sortujPl() {
    const collator = new Intl.Collator('pl')
    this.persons.sort((student1, student2)=>{
      return collator.compare(student2.surname,student1.surname);
    })
  }

  sortuj1Pl() {
    const collator = new Intl.Collator('pl')
    this.persons.sort((student1, student2)=>{
      return collator.compare(student1.surname,student2.surname);
    })
  }
  sortujWzrost(){
    this.persons.sort((student1, student2)=>{
      if(student1.height<student2.height)
        return 1;
      if(student1.height>student2.height)
        return -1;
      return 0;
    })
  }

}
