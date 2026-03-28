type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

// interface TeaRecipe {
//   water: number;
//   milk: number;
// }

// class MasalaChai implements TeaRecipe {
//   water = 50;
//   milk = 100;
// }

// type CupSize = "small" | "large";
interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

type Response =
  | {
      ok: true;
    }
  | { ok: false };

// class myRes implements Response {
//   ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon"; // We call these kind of types 'literal types'

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Shreyash", bio: "shreyxsh.me" };
const u2: User = { username: "Shreyash" };

type Config = {
  readonly appName: string;
  version: number;
};

const config: Config = {
  appName: "Masterji",
  version: 1,
};

// config.appName = "ChaiCode" throws error because the variable is readonly

