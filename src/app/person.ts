export class Person{
  public firstName: string;
  public surname: string;
  private height: number;
  constructor(firstName: string, surname: string){
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
