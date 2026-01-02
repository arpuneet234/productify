import { productsList } from "../constants";

const ProductCard = ({ title, thumbnail, tags, price, rating }) => {
  console.log(productsList?.products[20]?.id);
  console.log(thumbnail);
  return (
    <div className="card">
      <img src={thumbnail}></img>
      <h1>{title}</h1>
      <h2>{tags?.join(", ")}</h2>
      <h3>Price : {price} $</h3>
      <h3>rating : {rating}</h3>
    </div>
  );
};

export default ProductCard;
