import ProductCard from "./ProductCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filter } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredList, setfilteredList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");

    const json = await data.json();

    setfilteredList(json);
    setAllProducts(json);
  }

  const isOnline = useOnline();

  console.log(isOnline);

  if (!isOnline) return <h1>🔴 You are offline Please Check your Internet</h1>;
  else if (filteredList.length === 0) {
    return <Shimmer />;
  } else
    return (
      <div>
        <div className="Search-Bar p-5 my-2 bg-amber-100">
          <input
            className="bg-amber-50 focus:bg-green-100"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            data-testid="search-btn"
            className="p-2 bg-amber-600 text-white mx-2 rounded-lg hover:bg-amber-900 "
            onClick={(e) => {
              setfilteredList(filter(searchText, allProducts));
            }}
          >
            Search
          </button>
          <input
            className="bg-amber-50"
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          ></input>
        </div>

        <div className="product-list flex flex-wrap">
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
