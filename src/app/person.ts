export class Person {
  constructor(public firstName: string,
              public surname: string,
              private height?: number | undefined,
              private weight=75) {
    console.log('Konstuktor obiektu Person');
    this.firstName = firstName;
    this.surname = surname;
    if (height === undefined)
      this.height = 100
    else
      this.height = height;
  }

  nextFun(): void {
    this.height = 200;
  }

  getHeight(): number {
    return this.height;
  }
  getWeight(): number {
    return this.weight;
  }

  setHeight(height: number) {
    this.height = height;
  }
}
