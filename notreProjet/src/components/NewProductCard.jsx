import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
// import axios from "axios";
import "../styles/products.css";

const NewProductCard = () => {
  const data = useLoaderData();
  // console.log(data);
  const [product, setProduct] = useState(data);

  // useEffect(() => {
  //   axios
  // .get("https://fakestoreapi.com/products")
  // .then((res) => setProduct(res.data));
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
