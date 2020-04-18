import {Component, OnInit} from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-constructors-example',
  templateUrl: './constructors-example.component.html',
  styleUrls: ['./constructors-example.component.less']
})
export class ConstructorsExampleComponent implements OnInit {

  array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  originalNumbers1D: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
  }

  ngOnInit(): void {
    const person: Person = new Person();
    console.log(person);
  }

  originalArray1D() {
  }
}
