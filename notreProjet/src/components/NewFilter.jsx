import React from "react";
import { useEffect } from "react";

const NewFilter = ({ category, setCategory }) => {
  const handleClick = (event) => {
    const inputValue = event.target.value;
    if (inputValue !== "reset") {
      setCategory([...category, inputValue]);
    } else {
      setCategory([]);
    }
  };

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <div>
      <button onClick={handleClick} value="men's clothing">
        Vêtements Homme
      </button>
      <button onClick={handleClick} value="jewelery">
        Bijoux
      </button>
      <button onClick={handleClick} value="electronics">
        Electronique
      </button>
      <button onClick={handleClick} value="women's clothing">
        Vêtements Femme
      </button>
      <button value="reset" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
};

export default NewFilter;

// const NewFilter = ({ category, setCategory }) => {
//   const handleClick = (event) => {
//     const inputValue = event.target.value;
//     if (inputValue !== "reset") {
//       setCategory([inputValue]);
//     } else {
//       setCategory(["all"]);
//     }
//   };

//   "electronics",
//   "jewelery",
//  "women's clothing"
//   "men's clothing"

// const resetButton = () => {
//   if (category.length === 0) {
//     setProduct([...data]);
//   }
