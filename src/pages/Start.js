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



function Start() {

 return (
    <NavHeader/>
  )
}


export default Start;

