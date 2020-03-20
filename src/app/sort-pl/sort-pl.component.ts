import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-sort-pl',
  templateUrl: './sort-pl.component.html',
  styleUrls: ['./sort-pl.component.less']
})
export class SortPlComponent implements OnInit {
  students:Student[] = [{name: 'Przemysław', surname: 'Stokłosa', height: 174}]
  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<10;i++){
      this.students.push({name: 'Przemysław', surname: 'Stokłosa'+i, height: 165+i})
    }
    this.students.push({name: 'Anna', surname: 'Łęcka',height: 200})
    this.students.push({name: 'Anna', surname: 'Lęcka', height: 201})
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
}
