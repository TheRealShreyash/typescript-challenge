import "./App.css";
import ChaiCard from "./components/ChaiCard";
import { Counter } from "./components/Counter";
import type { Chai } from "./types";
import ChaiList from "./components/ChaiList";
import OrderForm from "./components/OrderForm";
import Card from "./components/Card";

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 30 },
  { id: 2, name: "Ginger", price: 50 },
  { id: 3, name: "Lemon", price: 60 },
];

function App() {
  return (
    <>
      <div>
        <h1>React + TS</h1>
        <ChaiCard name="Headphones" price={1000} />
        <ChaiCard name="Tablet" price={25000} />
        <Counter />
        <ChaiList items={menu} />
        <OrderForm
          onSubmit={(order) => {
            console.log(`Placed ${order.name}, ${order.cups} cups`);
          }}
        />
        <Card
          title="Chai aur Typescript"
          footer={<button>Order Now!</button>}
        />
      </div>
    </>
  );
}

export default App;
