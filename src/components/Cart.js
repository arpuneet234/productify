import store from "../utils/store";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  function clearCartHandle() {
    dispatch(clearCart());
  }

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <h1 className="font-bold">Cart-{cartItems.length} Items </h1>
      <button className=" bg-amber-200" onClick={() => clearCartHandle()}>
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
