const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "masala", price: 15 },
  { name: "lemon", price: 25 },
];

const cities: readonly string[] = ["Delhi", "Bangalore"];

// cities.push("Pune") we cannot do this because its a readonly array.

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let chaiTuple: [string, number];

chaiTuple = ["Masala", 20];
// chaiTuple = [20, "Masala"]; throws error because not in order

let userInfo: [string, number, boolean?];

userInfo = ["Shreyash", 100];
userInfo = ["Shreyash", 100, true];

const location: readonly [number, number] = [28.66, 34.45]; // readonly tuple

const chaiItems: [name: string, price: number] = ["Masala", 24]; // named tuple

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVED, // 101
  CANCELLED, // 102
} // self incrementing

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
  LEMON = "lemon",
}

function makeChai(type: ChaiType) {
  console.log(`Making: ${type} chai!`);
}

makeChai(ChaiType.GINGER);
makeChai(ChaiType.MASALA);

enum RandomEnum {
  ID = 1,
  NAME = "chai",
} // not a good practice usually prefer for the datatype to be same for each property

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = Sugars.MEDIUM;

let t: [string, number] = ["chai", 10];
t.push("extra"); // unexpected behavior
