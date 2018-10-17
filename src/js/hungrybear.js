export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.deadFeeder = false;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if(this.foodLevel > 0) {
      return false;
    } else {
    return true;
    }
  }

  feed() {
    if (this.deadFeeder === false) {
    this.foodLevel = 10;
  } else if(this.deadFeeder === true) {
      this.foodLevel = 0;
    }
  }

}
