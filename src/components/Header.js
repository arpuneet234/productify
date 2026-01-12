import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const title = (
  <a href="/">
    <img
      className="h-28 p-3"
      alt="Productify Logo"
      src="https://www.logoai.com/uploads/output/2022/01/16/844f6937a6cbf4a3082e133e72f5cf39.jpg"
    ></img>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between  bg-amber-100 shadow-lg">
      {title}
      <ul className="flex py-10">
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2">
          <Link to="/about">About</Link>
        </li>
        <li className="px-2">
          <Link to="/contact">Conctact</Link>
        </li>

        <li className="px-2">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="px-2">
          <Link to="/cart">Cart - {cartItems.length} Items</Link>
        </li>
      </ul>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      <h1 className="p-10 m-10 text-red-400 font-bold">{user.name}</h1>
    </div>
  );
};

export default Header;
