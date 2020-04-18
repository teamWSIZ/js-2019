export class Person{
  firstName: string;
  surname: string;
  height: number;
  constructor(firstName: string, surname: string){
    console.log('Konstuktor obiektu Person');
    this.firstName = firstName;
    this.surname = surname;
  }
}
