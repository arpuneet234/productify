import ProductCard from "./ProductCard";
import { productsList } from "../constants";

const Body = () => {
  return (
    <div className="product-list">
      {productsList.products.map((product, index) => {
        return <ProductCard {...product} key={index} />;
      })}
    </div>
  );
};

export default Body;
