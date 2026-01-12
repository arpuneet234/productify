import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useProduct from "../utils/useProduct";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ProductDetails = () => {
  const { id } = useParams();
  console.log(useParams());
  //const [data, setData] = useState({});

  const data = useProduct(id);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <h2>Product Id:{id}</h2>
      <img className="w-3xs" src={data.images} />
      <h3 className="font-bold">Product Name: {data.title}</h3>
      <button
        className=" border-2 rounded-2xl w-56 bg-green-300"
        onClick={() => handleAddItem(data)}
      >
        Add Item
      </button>
    </div>
  );
};
export default ProductDetails;
