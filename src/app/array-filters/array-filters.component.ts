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
  }
  simplePlanet():Planet{
    return Planet.MERKURY;
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
