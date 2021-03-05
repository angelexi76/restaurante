import React, { useState } from "react"
import {Link} from "react-router-dom"
/* import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" traemos esto del index2 para evitar errores de digitación.
import {faChevronLeft, faSearch, faShoppingCart, faHome, faCog}from "@fortawesome/free-solid-svg-icons"
 */
import NavHeader from "../components/NavHeader";
import ContainerNotice from "../components/ContainerNotice";
import ContainerCategories from "../components/ContainerCategories";
import ContainerProducts from "../components/ContainerProducts";
import {infoproduct} from "../Api/product.json";
import Product from "../components/Product";
import Footer from "../components/Footer";

function ShoppingCart (){

return(
    <NavHeader/>)

}
 export default ShoppingCart;