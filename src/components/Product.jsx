import React from "react"
const Product = ({img, alt,title,description,price,recommended,category,showCategory})=> {
    return(
        <div className={category===showCategory||(showCategory==="Recomendados"&&recommended===1)?"product show":"product"}>
            <img src={img} alt={alt}/>
            <div className="product-text">
            <h4 className="product-title">{title}</h4>
            <p className="product-description">{description}</p>
            <p className="product-price">{price}</p>
            
            

            <div className="contadores">
                <button className="menos">-</button>
                <p>1</p>
                <button className="mas">+</button>
            </div>
            </div>
        </div>

    )
}
export default  Product;