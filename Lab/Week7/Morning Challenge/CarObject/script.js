class CarObject {
  constructor(acceleration,brake,speed){
    this.acceleration=acceleration;
    this.brake=brake;
    this.speed=speed;

  }


  calculate(acceleration,brake,speed){
  return this.acceleration * this.brake *  this.speed;
  }


}

let object = new CarObject(3,4,4);
console.log(object.calculate());
