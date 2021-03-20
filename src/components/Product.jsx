import Media from 'react-media';
import { Order } from "@fortawesome/free-brands-svg-icons"
import React, { useEffect, useState } from "react"


const Product = ({id,img, alt,title,description,price,recommended,category,showCategory,conterglobal,setConterglobal,list,setList,cart})=> {
const [conter,setConter]=useState(0)/* aca creo el estado de conter */
function restar(){
/*  aca decimos cuando le de clik si el contador esta x encima de 0 le va a
restar 1 tanto a conter como al conter global y recorremos la list ,si ya el prod esta dentro
de la lista si ya esta pedido a la cantidad le va restar 1 en foreach estamos recorriendo lista y le pusimos elemento a la lista*/    
    if (conter>0){
        setConter(conter-1)
        setConterglobal(conterglobal-1)
        list.forEach(element => {
            if(element.id===id){
                element.cant=element.cant-1  
            } 
            
        });
    }

}
/* esta funcion cuando le da click al + editamos el conter y el conterglobal para q le agrege 1
luego le decimos si la lista tiene un elemto con este id agrege 1,en cant sino me va a crear ese elemto en el array
...la lista como la tiene con lo q ya tiene y sumale esto*/
function sumar(){
    setConter(conter+1)
    setConterglobal(conterglobal+1)
    if(list.some(element=>element.id===id)){
        list.forEach(element =>{
            if(element.id===id){
                element.cant=element.cant+1  
            } 
            
        })
    }else{
        setList([
            ...list,
            {
                id:id,
                cant:conter+1,
                price:price,
                title:title
            }
        ])
    }
}
/* aca le decimos si list esta vacia no hacer nada list some lo q nos dice ai 
este elemto esta dentro de list asigna la cantidad al conter  */
useEffect(()=>{
    assign()
},[])
const assign=()=>{
    if(list.some(element=>element.id===id)){
        list.forEach(element=>{
            if(element.id===id){
                setConter(element.cant)
            }
        })
    }
}
    return (


        <div className={category===showCategory||(showCategory==="Recomendados"&&recommended===1)||(cart&&list.some(element=>element.id===id))? "product show":"product"}>  
 {/* cart va a ser true para q se cumpla la condicion,pero solo en cart */} 

            <img src={img} alt={alt}/>
            <div className="product-text">
            <h4 className="product-title">{title}</h4>
            <p className="product-description">{description}</p>
            <p className="product-price">{`$${price}`}</p>               {/*  el precio q va a renderizar */}
            
            

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


