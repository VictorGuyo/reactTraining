import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
// import axios from "axios";
import "../styles/products.css";
import NewFilter from "./NewFilter";

const NewProductCard = () => {
  const data = useLoaderData();
  // console.log(data);
  const [product, setProduct] = useState(data);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // Fonction pour filtrer les produits en fonction de la catégorie sélectionnée
    const filterProducts = () => {
      if (category.length === 0) {
        // Si la catégorie est vide, afficher tous les produits
        setProduct(data);
      } else {
        // Sinon, filtrer les produits par catégorie
        const filteredProducts = data.filter((item) =>
          category.includes(item.category)
        );
        setProduct(filteredProducts);
      }
    };

    filterProducts();
  }, [category, data]);

  return (
    <div className="grid-card">
      <NewFilter category={category} setCategory={setCategory} />
      {/* <button onClick={displayCategory}>test</button> */}
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

//  const displayCategory = () => {
//    if (category.length === 0) {
//      setCategory(product.category);
//    }
//   } else {
//     category.filter()
//   }
// };

// const displayCategory = () => {
//   let results = [...data];

//   let categorySansDoublons = [...new Set([...category])];
//   console.log("category", categorySansDoublons);

//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < categorySansDoublons.length; j++) {
//       if (
//         data[i].category === categorySansDoublons[j] ||
//         category[0] === "all"
//       ) {
//         results.push(data[i]);
//       }
//     }

//     console.log("results  after filter ", [...results]);
//   }
//   setProduct([...results]);
// };

// useEffect(() => {
//   axios
// .get("https://fakestoreapi.com/products")
// .then((res) => setProduct(res.data));
// }, []);

// useEffect(() => {
//   displayCategory();
// }, [category]);
