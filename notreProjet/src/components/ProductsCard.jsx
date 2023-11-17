import React, { useState, useEffect } from 'react';
import Filters from './Filters.jsx';
import ContextProducts from '../contexts/ContextProducts.jsx';

const ProductsCard = () => {
    const [cardItems, setCardItems] = useState([])

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
        getItems()
      }, [])
      
    return (
        <div>
            <ContextProducts>
       <Filters />
            </ContextProducts>
      {cardItems.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
        </div> 
    );
};

export default ProductsCard;