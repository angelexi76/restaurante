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
import Cart from "../components/Cart";



 
 function ShoppingCart({conterglobal, setConterglobal,showCategory}) {

  
    return(
    <div className="container">
        <header className="header">
        <NavHeader  show={"btn-container"}/>

       
       


        
        </header>
        <ContainerProducts>

  
{infoproduct.map((item) => (

                   <Product
                   id={item.id}
                   img={item.img}
                   alt={item.alt}
                   title={item.title}
                   description={item.description}
                   price={item.price}
                   recommended={item.recommended}
                   category={item.category}
                   showCategory={showCategory}            
                   key={item.id}
                   conterglobal={conterglobal} setConterglobal={setConterglobal}/>
                   /* aca lo paso el conterglobal al nieto para utilizarlo en product */
       ))}
     

</ContainerProducts> 
    

        
        
 {/* <Cart/> */}
    </div>

        
    )
 }
  export default ShoppingCart;