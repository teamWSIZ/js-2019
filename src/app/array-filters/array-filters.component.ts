import {Component, OnInit} from '@angular/core';
import {Planet} from '../planet';

@Component({
  selector: 'app-array-filters',
  templateUrl: './array-filters.component.html',
  styleUrls: ['./array-filters.component.less']
})

export class ArrayFiltersComponent implements OnInit {
  array1: number[] = [1,2,3,4,5,6,7,8,9,10];
  originalNumbers1D: number[] = [1,2,3,4,5,6,7,8,9,10];
  array1Dinfo = '';
  planeta: Planet;

  constructor() { }

  ngOnInit(): void {
    this.planeta = Planet.ZIEMIA;
    console.log(Planet);
    console.log(this.planetInfo(Planet.ZIEMIA));
  }
  simplePlanet():Planet{
    return Planet.MERKURY;
  }
  planetInfo(planet: Planet):string{
    console.log(planet as Planet)
    switch(+planet){
      case Planet.ZIEMIA:
      case Planet.MARS:
        return 'Można wylądować';
      case Planet.JOWISZ:
      case Planet.NEPTUN:
        return 'Gazowy olbrzym';
      default:
        return 'Inna planeta';
    }
  }
  originalArray1D():void{
    this.array1 = this.originalNumbers1D;
  }
  evenElements():void {
    this.array1 = this.originalNumbers1D.filter(v=>v%2===0);
  }
  divisibleBy4():void {
    this.array1 = this.originalNumbers1D.filter(v=>v%4===0);
  }
  notDivisibleBy4():void {
    this.array1 = this.originalNumbers1D.filter(v=>v%4===0);
  }
}
