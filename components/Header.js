import { useState } from "react";

const title = (
  <a>
    <img
      alt="Productify Logo"
      src="https://www.logoai.com/uploads/output/2022/01/16/844f6937a6cbf4a3082e133e72f5cf39.jpg"
    ></img>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      {title}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Conctact</li>
        <li>Cart</li>
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
