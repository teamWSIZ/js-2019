export class Person{
  firstName: string;
  surname: string;
  constructor(firstName: string, surname: string){
    console.log('Konstuktor obiektu Person');
    this.firstName = firstName;
    this.surname = surname;
  }
}
