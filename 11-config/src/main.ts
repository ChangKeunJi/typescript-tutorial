class Car {
  engine = 1;

  printEngine() {
    this.engine++;

    console.log('Engine !!')
  }
}

const car = new Car();
car.printEngine();