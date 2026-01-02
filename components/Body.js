import ProductCard from "./ProductCard";
import { productsList } from "../constants";
import { useState } from "react";

function filter(searchText, productsList) {
  let filteredListd = productsList.filter((product) => {
    return product.title.includes(searchText);
  });
  return filteredListd;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredList, setfilteredList] = useState(productsList);

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
            setfilteredList(filter(searchText, productsList));
          }}
        >
          Search
        </button>
      </div>

      <div className="product-list">
        {filteredList.map((product, index) => {
          return <ProductCard {...product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Body;
