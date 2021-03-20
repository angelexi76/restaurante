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



 
 function ShoppingCart({conterglobal, setConterglobal,showCategory,list,setList}) {
let total=0;
list.forEach(element => {
   total+=element.price *element.cant
   
});
/* si el producto en su cantidad tiene mas de 0,no nos envie ese elmento de la list */
const products=[]
list.forEach(element=>{
   if(element.cant!==0) {
      products.push(`producto:${element.title} cantidad:${element.cant}...`)

   }
})
const message=`${products.join(``)} Total:$${total}`
    return(
    <div className="container">
        <header className="header">
        <NavHeader  show={"btn-container"} route={"/index"}/>
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
                   /* recommended={item.recommended}
                   category={item.category} */
                   showCategory={showCategory}            
                   key={item.id}
                   conterglobal={conterglobal} setConterglobal={setConterglobal}
                   list={list}
                   setList={setList}
                   cart={true}/>
                   /* aca lo paso el conterglobal al nieto para utilizarlo en product */
       ))}
     

</ContainerProducts> 
    

        
        
 <Cart total={total}message={message}/>
    </div>

        
    )
 }
  export default ShoppingCart;