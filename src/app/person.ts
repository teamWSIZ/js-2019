export class Person{
  constructor(public firstName: string, public surname: string, private height: number){
    console.log('Konstuktor obiektu Person');
    this.firstName = firstName;
    this.surname = surname;
    this.height=height;
  }
  nextFun():void{
    this.height=200;
  }
  getHeight():number{
    return this.height;
  }
  setHeight(height: number){
    this.height=height;
  }
}
