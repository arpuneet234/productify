import { useState, useEffect } from "react";
const useProduct = (id) => {
  const [data, setData] = useState({});
  useEffect(() => {
    getProductInfo();
  }, []);

  async function getProductInfo() {
    const data = await fetch("https://api.escuelajs.co/api/v1/products/" + id);
    const json = await data.json();
    console.log(json);
    setData(json);
  }

  return data;
};

export default useProduct;
