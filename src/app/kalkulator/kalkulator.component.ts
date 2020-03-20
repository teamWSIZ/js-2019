import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.less']
})
export class KalkulatorComponent implements OnInit {
  wynik = 12;
  liczbaA: string;
  liczbaB: string;
  kwadrat = 0;
  liczba1N =  0;
  liczba2N = 0;
  wynik1N = 0;
  wynik2N = 0;
  liczba4N = 0;
  students:Student[] = [{name: 'Przemysław', surname: 'Stokłosa', height: 174}]

  constructor() {
  }

  ngOnInit() {
    for(let i=0;i<10;i++){
      this.students.push({name: 'Przemysław', surname: 'Stokłosa'+i, height: 165+i})
    }
    this.students.push({name: 'Anna', surname: 'Łęcka',height: 200})
    this.students.push({name: 'Anna', surname: 'Lęcka', height: 201})
    for(const student of this.students){
      console.log(student.name+' '+student.surname)
    }
  }

  computeSum() {
    const a = parseInt(this.liczbaA);
    const b = parseInt(this.liczbaB);
    this.wynik = a + b;
    this.kwadrat = this.nearestSquare(this.wynik);

  }

  /**
   *
   * @param value Wartość parametru dla którego liczymy kwadraty
   * @returns Najmnijesza liczba całkowita x = y * y >= value, gdzie y to l. całkowita
   */
  nearestSquare(value: number): number {
    for (let y = 0; y <= 100; y++) {
      let x = y * y;
      if (x >= value) return x;
    }

    // Działanie instrukcji warunkowych...
    // if (value < 100) {
    //   //kod wykonany jeśli wartość "value" < 100
    //   return 50;
    // } else {
    //   //kod wykonany jeśli wartość "value" >= 100
    //   return 200;
    // }
  }


  /**
   * @returns suma liczb 1 + 2 + 3 + ... + liczba1N
   */
  computeSum1N(liczba1N: number) {
    let suma = 0;
    /// tu coś z pętlą for....
    for(let x=1; x<=liczba1N; x++) {
      suma += x;
    }
    return suma;
  }

  computePower(liczba: number, liczba1: number):number{
    const w = liczba*liczba1;
    const tab:number[] = []
    for(let i=0;i<10;i++)
      tab.push(10)
    let v = 0;
    tab.forEach(value=>v=v+value)
    return v;
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
