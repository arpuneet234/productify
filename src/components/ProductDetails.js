import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ProductDetails = () => {
  const { id } = useParams();
  console.log(useParams());
  const [data, setData] = useState({});
  console.log(data.images);
  useEffect(() => {
    getProductInfo();
  }, []);

  async function getProductInfo() {
    const data = await fetch("https://api.escuelajs.co/api/v1/products/" + id);
    const json = await data.json();
    console.log(json);
    setData(json);
  }

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
