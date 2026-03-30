function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 3);

function getChaiPrice(): number {
  return 25;
}
function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("Chai is ready!");
}

// function orderChai(type?: string) {

// }
function orderChai(type: string = "Masala") {} // 2nd way of making parameter optional (usually not preferred)

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
