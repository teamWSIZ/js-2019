import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.less']
})
export class AlgoComponent implements OnInit {
  wynik: string = '---n/a---';

  constructor() {
  }

  ngOnInit() {
  }

  check() {
    let x = 0;
    let y = 12;
    let z = 99;
    x = x + 3;
    z = x + y;

    let t = [5, 6, 9, 12];

    //algo do sprawdzenia czy liczby w "t" rosną:
    let previous = -1000;
    let suma = 0;

    for(let v of t) {
      console.log(`sprawdzam liczbę ${v}`);
      suma = suma + v;
      if (v > previous) {
        console.log(`liczba jest OK`);
        previous = v;
      } else {
        console.log(`uwaga: liczba ${v} nie jest większa niż ${previous}`);
        this.wynik = 'liczby nie rosną!!';
        return;
      }
    }
    console.log(`koniec sprawdzania; suma=${suma}`)
    this.wynik = 'liczby rosną';
  }
}
