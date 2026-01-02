import React from "react";
import ReactDOM from "react-dom/client";
const title = (
  <a>
    <img
      alt="Productify Logo"
      src="https://www.logoai.com/uploads/output/2022/01/16/844f6937a6cbf4a3082e133e72f5cf39.jpg"
    ></img>
  </a>
);

const Header = () => {
  return (
    <div className="header">
      {title}

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Conctact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="card">
      <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"></img>
      <h1>Essence Mascara Lash Princess</h1>
      <h2>Price : 50$</h2>
      <h2>rating : 5</h2>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <ProductCard></ProductCard>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body></Body>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
