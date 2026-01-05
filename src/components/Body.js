import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filter(searchText, allProducts) {
  let filteredListd = allProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchText.toLowerCase());
  });
  return filteredListd;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredList, setfilteredList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    console.log(data);
    const json = await data.json();
    console.log(json);
    setfilteredList(json);
    setAllProducts(json);
  }

  if (filteredList.length === 0) {
    return <Shimmer />;
  } else
    return (
      <div>
        <div className="Search-Bar">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              setfilteredList(filter(searchText, allProducts));
            }}
          >
            Search
          </button>
        </div>

        <div className="product-list">
          {filteredList.map((product, index) => {
            return (
              <Link key={index} to={"/product/" + product.id}>
                <ProductCard {...product} />
              </Link>
            );
          })}
        </div>
      </div>
    );
};

export default Body;
