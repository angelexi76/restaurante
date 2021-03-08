import React, { useState } from "react"


const Product = ({id,img, alt,title,description,price,recommended,category,showCategory,conterglobal,setConterglobal})=> {
const [conter,setConter]=useState(0)/* aca creo el estado de conter */
function restar(){
    
    if (conter>0){
        setConter(conter-1)
        setConterglobal(conterglobal-1)
    }

}
function sumar(){
    setConter(conter+1)
    setConterglobal(conterglobal+1)
}
    return (


/* aca validamos para q clasifiq la categoria de cada prod del JSON,sea = al boton al q se le da click .cuando le de click a recomendados nos muestre los q tienen recommende 1*/         
        <div className={category===showCategory||(showCategory==="Recomendados"&&recommended===1)?"product show":"product"}>
            <img src={img} alt={alt}/>
            <div className="product-text">
            <h4 className="product-title">{title}</h4>
            <p className="product-description">{description}</p>
            <p className="product-price">{price}</p>
            
            

            <div className="contadores">
                <button className="menos" onClick={restar}>-</button>
                <p>{conter}</p>
                <button className="mas" onClick={sumar}>+</button>
            </div>
            </div>
     
        
        </div> 

    )
}
export default  Product;