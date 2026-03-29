const chai = {
  name: "Masala chai",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak CHai",
  price: 25,
  ingredients: ["ginger", "milk", "water", "tea leaves"],
};

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup; // typescript doesn't throw error for passsing extra values

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "shreyash",
  password: "123",
};

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = { id: string; items: Item[]; address: Address };

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("updating chai with ", updates);
};

updateChai({ price: 25 }); // if we didn't use Partial here we would have to pass each and every value defined in the Chai type. With partial we can update the chai partially

updateChai({ isHot: false });
updateChai({}); // The issue with partial here is that we can also pass empty objects which can throw errors later.

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({ name: "Masala chai", quantity: 2 }); // Require makes every property must. They must be passed

type NewChai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
}; // Pick helps us decide what exact properties we actually need for a variable.

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[];
};

type PublicChai = Omit<Chai, "secretIngredients">;

const publicChai: PublicChai = {
  name: "Public Chai",
  price: 20,
  isHot: true,
}; // Here secretIngredients cannot be used because in publicchai type we omitted that property