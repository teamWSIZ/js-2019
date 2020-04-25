import {Component, OnInit} from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-constructors-example',
  templateUrl: './constructors-example.component.html',
  styleUrls: ['./constructors-example.component.less']
})
export class ConstructorsExampleComponent implements OnInit {

  persons: Person[] = [];

  constructor() {
  }

  ngOnInit(): void {
    for(let i=0;i<10;i++) {
      const person: Person = new Person('Przemysław1','Stokłosa'+i,170+i,70+i);
      this.persons.push(person);
    }
  }

  originalArray1D() {
  }
}
