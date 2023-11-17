import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [card, setCard] = useState([]);

  const { id } = useParams();

  const getItems = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        setCard(data);
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
      <h1>Titre = {card.title}</h1>
      <img src={card.image} />
      <p>{card.price} €</p>
      <p>ID = {id}</p>
    </div>
  );
};

export default Product;
