/* import { Order } from "@fortawesome/free-brands-svg-icons" */
import React, { useEffect, useState } from "react"


const Product = ({id,img, alt,title,description,price,recommended,category,showCategory,conterglobal,setConterglobal,list,setList,cart})=> {
const [conter,setConter]=useState(0)
function restar(){

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


            <img src={img} alt={alt}/>
            <div className="product-text">
            <h4 className="product-title">{title}</h4>
            <p className="product-description">{description}</p>
            <p className="product-price">{`$${price}`}</p>              
            

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


