import React, { useState, useEffect } from "react";
import Filters from "./Filters.jsx";
import ContextProducts from "../contexts/ContextProducts.jsx";
import "../styles/products.css";

const ProductsCard = () => {
  const [cardItems, setCardItems] = useState([]);

  const getItems = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCardItems(data);
      } else {
        console.log("Erreur de réponse du serveur");
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <ContextProducts>
        <Filters />
      </ContextProducts>
      <div className="grid-card">
        <div className="card-container">
          {cardItems.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} />
              <h1>{item.title} </h1>
              <div>
                <p className="price">{item.price} €</p>
                <p className="rating">{item.rating.rate} /10</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
