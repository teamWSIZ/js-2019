export class Person{
  private height: number;
  constructor(public firstName: string, public surname: string){
    console.log('Konstuktor obiektu Person');
    this.firstName = firstName;
    this.surname = surname;
    this.height=100;
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
