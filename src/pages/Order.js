import React, { useState } from "react"
import {Link} from "react-router-dom"
import NavHeader from "../components/NavHeader";
import ContainerNotice from "../components/ContainerNotice";
import ContainerCategories from "../components/ContainerCategories";
import ContainerProducts from "../components/ContainerProducts";
import {infoproduct} from "../Api/product.json";
import Product from "../components/Product";
import Footer from "../components/Footer";
import ShoppingCart from "./ShoppingCart";



function Order() {

  

  const PHONE = 3108003876;
  const request = [];

  infoproduct.forEach((item, id) => {
    request.push(`Producto ${id+1}
     
      descripcion: ${item.price}//
    `);
  });

  const MESSAGE = `Tu Pedido:
  
  ${request.join(`
  `)}
  `;

  console.log(MESSAGE)

  return (
    <Product
      infoproduct={infoproduct}
      phone={PHONE}
      message={MESSAGE}
    />
  )
}


export default Order;

