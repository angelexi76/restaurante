import React, { useState } from "react"
import {Link} from "react-router-dom"

import NavHeader from "../components/NavHeader";
import ContainerNotice from "../components/ContainerNotice";
import ContainerCategories from "../components/ContainerCategories";
import ContainerProducts from "../components/ContainerProducts";
import {infoproduct} from "../Api/product.json";
import Product from "../components/Product";
import Footer from "../components/Footer";





function Index2({conterglobal,setConterglobal,showCategory,setShowCategory,list,setList}) {
  const [show,setShow] = useState("btn-container")
  const handleClick = ()=>{
    if (show === "btn-container"){
      setShow("btn-container active")
      
      
    }
    else {setShow("btn-container")}

    
  }
 
  const activeCategory=(category)=>{
   setShowCategory(category)
  }

    return (
  
     

<div className="container">
 <header className="header">
   <NavHeader handleClick={handleClick} show={show} route={"/"}/>
   <ContainerNotice />
   
 </header>
 <ContainerCategories activeCategory={activeCategory} showCategory={showCategory}/> 
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
                    conterglobal={conterglobal} 
                    setConterglobal={setConterglobal}
                    list={list}
                    setList={setList}/>
                    
        ))}
      

 </ContainerProducts> 
 
     
 
<Footer conterglobal={conterglobal}></Footer>     

 


 
  
</div>


  
)}

export default Index2;


    
      