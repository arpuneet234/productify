import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useProduct from "../utils/useProduct";
const ProductDetails = () => {
  const { id } = useParams();
  console.log(useParams());
  //const [data, setData] = useState({});

  const data = useProduct(id);

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <h2>Product Id:{id}</h2>
      <h3>Product Name:{data.title}</h3>
      <img src={data.images} />
    </div>
  );
};
export default ProductDetails;
