import React, { useState } from "react"

/*const {title,price,id} =sale error cuando coloco product pero es lo q se quiere mostrar*/ 
const Product = ({id,img, alt,title,description,price,recommended,category,showCategory,cart,setCart,conterglobal,setConterglobal})=> {
const [conter,setConter]=useState(0)/* aca creo el estado de conetr */
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
     
            {/* <div>
                <ul>esto es para q se muestre el nombre del prod y el precios
                    <li>{title}</li>
                    <li>{price}</li>
                </ul>
            </div>*/}
        </div> 

    )
}
export default  Product;