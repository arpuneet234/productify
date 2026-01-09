import { productsList } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ProductCard = ({ title, tags, price, images }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card w-56 p-2 m-2 shadow-lg bg-amber-100 h-80">
      <img className="h-50" src={images}></img>

      <h1 className="font-bold text-lg">{title}</h1>
      <h2>{tags?.join(", ")}</h2>
      <h3>Price : {price} $</h3>
      <h5>
        {user.name}-{user.email}
      </h5>
    </div>
  );
};

export default ProductCard;
