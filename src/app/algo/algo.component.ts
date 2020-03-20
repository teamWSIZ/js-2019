import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.less']
})
export class AlgoComponent implements OnInit {
  wynik: string = '---n/a---';
  tab_reversed = []; //pole klasy ...
  visible_sum = 0;

  constructor() {
  }

  ngOnInit() {
  }

  check() {
    let x = 0;  //zmienna lokalna, typu "number"
    let y = 12;
    let z = 99;
    x = x + 3;
    z = x + y;

    let t = [5, 6, 7, 8, 9, 12];  //to jest tablica liczb (number)
    let rt = []; //to będzie odwrócona tablica t... 12, 9, 8 ... 5
    rt.unshift(5);
    rt.unshift(2);  // dodaje liczbę "2" na początek tablicy "rt", -> [2,5]

    rt = [];  //znowu mamy pustą tablicę....

    //algo do sprawdzenia czy liczby w "t" rosną:
    let previous = -1000;
    let suma = 0;

    for(let v of t) {
      rt.unshift(v);
      let zz = 12;
      zz += 3;
      console.log(`sprawdzam liczbę ${v}`);
      suma = suma + v;
      if (v > previous) {
        zz += 3;
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
    this.tab_reversed = rt;
    this.visible_sum = suma;
  }

  abra_kadabra() {
    this.wynik = 'abc';

  }


}
