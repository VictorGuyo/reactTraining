import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Product from './components/Product.jsx';
import ProductsCard from './components/ProductsCard.jsx';

const router = createBrowserRouter([
{
  path: "/",
  element : <App/>,
  children: [
{
  path:"/product",
  element: <ProductsCard/>,
},
{
  path:"/product/:id",
  element: <Product/>,
}
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)


// async () => {
//   try {
//       const response = await fetch('https://fakestoreapi.com/products/4');
//       if (response.ok){
//         console.log(response.json());
//         return await response.json();
//       }} catch (err) {
//           console.error(err);
//           return null;
//       }
// }

// if (response.ok) {
//   const data = await response.json();
//   console.log(data); // Utilisez "data" au lieu de "response.json()"
//   return data;


