import { useState } from "react";
import { Link } from "react-router-dom";

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
        <li className="px-2">Cart</li>
        <li className="px-2">
          <Link to="/instamart">Instamart</Link>
        </li>
      </ul>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
