import { productsList } from "../constants";

const ProductCard = ({ title, image, tags, price, rating }) => {
  return (
    <div className="card">
      <img src={image}></img>
      <h1>{title}</h1>
      <h2>{tags?.join(", ")}</h2>
      <h3>Price : {price} $</h3>
      <h3>rating : {rating}</h3>
    </div>
  );
};

export default ProductCard;
