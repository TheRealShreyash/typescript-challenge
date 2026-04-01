class Chai {
  flavor: string;
  //   price: number;
  //   constructor(flavor: string, price: number) {
  //     this.flavor = flavor;
  //     this.price = price;
  //   }
  constructor(flavor: string) {
    this.flavor = flavor;
    console.log(this);
  }
}

// const masalaChai = new Chai("masala", 10);
const masalaChai = new Chai("masala");

class NewChai {
  public flavor: string = "Masala";
  private secretIngredients = "Cardamom";
  reveal() {
    console.log(this.secretIngredients);
  }
}

const c = new NewChai();

c.reveal();

class Shop {
  protected shopName = "Chai Corner"; // only available if the class is inherited or within class
}

class Branch extends Shop {
  getName() {
    console.log(this.shopName);
  }
}

new Branch().getName();

const branch = new Branch();

branch.getName();

class Wallet {
  #balance = 100; // another way of declaring private variable

  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();
w.getBalance();

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Want Diabetes ?");
    this._sugar = value;
  }
}

const e = new ModernChai();
e.sugar = 3;

class EkChai {
  static shopName = "Chai Cafe";
  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log("Brewing chai");
  }
}

class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
