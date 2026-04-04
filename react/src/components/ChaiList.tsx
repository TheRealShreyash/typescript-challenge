import type { Chai } from "../types";
import ChaiCard from "./ChaiCard";

interface ChaiListProps {
  items: Chai[];
}

const ChaiList = ({ items }: ChaiListProps) => {
  return (
    <div>
      {items.map((chai) => (
        <ChaiCard
          key={chai.id}
          name={chai.name}
          price={chai.price}
          isSpecial={false }
        />
      ))}
    </div>
  );
};

export default ChaiList;
