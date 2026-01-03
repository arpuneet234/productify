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

export default Header;
