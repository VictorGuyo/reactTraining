import { useParams, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

const NewProduct = () => {
  const data = useLoaderData();
  // const [product, setProduct] = useState(data);
  // const getProduct = async () => {
  //   try {
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setProduct(data);
  //       console.log(product);
  //     } else {
  //       console.log("Erreur de réponse du serveur");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     return null;
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image} alt="image" />
      <p>{data.category}</p>
      <p>{data.description}</p>
      <p>{data.price} €</p>
      {/* <p>{product.rating.rate} /10</p>
      <p>{product.rating.count}</p> */}
    </div>
  );
};

export default NewProduct;
