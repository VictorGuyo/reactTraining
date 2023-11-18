 import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const NewProduct = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  const getProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        console.log(product);
      } else {
        console.log("Erreur de réponse du serveur");
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="image" />
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p>{product.price} €</p>
      {/* <p>{product.rating.rate} /10</p>
      <p>{product.rating.count}</p> */}
    </div>
  );
};

export default NewProduct;
