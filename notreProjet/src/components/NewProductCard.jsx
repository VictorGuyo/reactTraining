import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../styles/products.css";

const NewProductCard = () => {
  const data = useLoaderData();
  const [product, setProduct] = useState(data);
  
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setProduct(res.data));
  // }, []);

  return (
    <div className="grid-card">
      <div className="card-container ">
        {product.map((element) => (
          <Link
            to={`/products/${element.id}`}
            key={element.id}
            className="card"
          >
            <img src={element.image} alt={element.title} />
            <h1>{element.title}</h1>
            <p className="price">{element.price} €</p>
            <p className="rating">{element.rating.rate} /10</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewProductCard;
