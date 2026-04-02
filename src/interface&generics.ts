interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masalaChai: Chai = {
  flavor: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "chai cafe",
};
// s.id = 2

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface ChaiRatings {
  [flavor: string]: number; // this is called index signature
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};

interface User {
  name: string;
}
interface User {
  age: number;
}

const u: User = {
  name: "Shreyash",
  age: 18, // this means that the interfaces get merged
};

interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {
  c: string;
}

const n: C = {
  a: "a",
  b: "b",
  c: "c",
};

function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("Masala chai");
wrapInArray(42);
wrapInArray({ flavor: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", "ginger");
pair(2, 2);
pair("masala", 2);
pair("masala", { milk: true });

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = {
  content: 20,
};

const stringBox: Box<string> = {
  content: "hello",
};

const boolBox: Box<boolean> = {
  content: false,
};

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};
