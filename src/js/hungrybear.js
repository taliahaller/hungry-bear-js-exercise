// export class HungryBear {
//
//   constructor(name) {
//     this.name = name;
//     this.foodLevel = 10;
//     this.deadFeeder = false;
//   }
//
//   setHunger() {
//     setInterval(() => {
//       this.foodLevel--;
//     }, 1000);
//   }
//
//   didYouGetEaten() {
//     if(this.foodLevel > 0) {
//       return false;
//     } else {
//     return true;
//     }
//   }
//
//   feed() {
//     if (this.deadFeeder === false) {
//     this.foodLevel = 10;
//   } else if(this.deadFeeder === true) {
//       this.foodLevel = 0;
//     }
//   }
//
// }

export let bear = {
  foodlevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if(this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if(this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up ${amount}!`
    }
  }
};

bear.eatSmall = bear.feed(5);
bear.eatMedium = bear.feed(10);
bear.eatLarge = bear.feed(15);
bear.eatYuck = bear.feed(-10);
bear.eatPowerUp = bear.feed(50);
bear.eatSpecialBonus = bear.feed(100);
bear.eatWeirdThing = bear.feed(Math.floor((Math.random() * 20) + 1));
