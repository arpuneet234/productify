import { productsList } from "../constants";

const ProductCard = ({ title, tags, price, images }) => {
  return (
    <div className="card w-56 p-2 m-2 shadow-lg bg-amber-100 h-80">
      <img className="h-50" src={images}></img>

      <h1 className="font-bold text-lg">{title}</h1>
      <h2>{tags?.join(", ")}</h2>
      <h3>Price : {price} $</h3>
    </div>
  );
};

export default ProductCard;
