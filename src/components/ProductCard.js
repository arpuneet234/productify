import { productsList } from "../constants";

const ProductCard = ({ title, tags, price, images }) => {
  {
    console.log(images);
  }
  return (
    <div className="card">
      <img src={images}></img>

      <h1>{title}</h1>
      <h2>{tags?.join(", ")}</h2>
      <h3>Price : {price} $</h3>
    </div>
  );
};

export default ProductCard;
