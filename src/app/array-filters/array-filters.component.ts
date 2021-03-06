import {Component, OnInit} from '@angular/core';
import {Planet} from '../planet';

@Component({
  selector: 'app-array-filters',
  templateUrl: './array-filters.component.html',
  styleUrls: ['./array-filters.component.less']
})

export class ArrayFiltersComponent implements OnInit {
  array1: number[] = [];
  array2D: number[][] = [[1,2],[2,4],[5,6]];
  originalNumbers1D: number[] = [];
  array2: number[] = [];
  array1Dinfo = '';
  planeta: Planet;

  constructor() { }

  ngOnInit(): void {
    this.planeta = Planet.ZIEMIA;
    console.log(Planet);
    console.log(this.planetInfo(Planet.ZIEMIA));

    for(var i=0;i<20;i++) {
      this.originalNumbers1D.push(i)
      this.array1.push(i);
    }
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
    this.array1 = this.originalNumbers1D.filter(v=>v%4!==0);
  }
  notDivisibleBy5() {
    this.array1 = this.originalNumbers1D.filter(v=>v%5!==0);
  }
  algorithm0() {
    this.array1 = this.originalNumbers1D.map(a=>a*a).filter(x=>x<100).map(x=>x*x*x);
  }
  algorithm1(){
    let array : number[] = [1,2,3,4,5,6,7,8,9,10];
    this.array1 = array.filter(e=>e%2==0).map(e=>e*e);
  }
  algorithm2(){
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    this.array2D = array.filter(e=>e<5 && e>1).map(e=>[e,e*e,e*e*e,e*e*e*e,e*e*e*e*e]);

    //let array1 = new Array(100);
    //array1.map((e,index)=>e=index);
  }
}
