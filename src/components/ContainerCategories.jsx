import React, { useState } from 'react';

const ContainerCategories = ({activeCategory})=> {
  const [showcategories,setShowCategories]= useState ("Recomendados")

    return(
        <div className="container-categories">

          <div className="categories">
            <h2 className="categories-title">Categorías</h2>
            
            <div className="classification-button">
              <button onClick={()=>activeCategory("Recomendados")}className={showcategories==="Recomendados"?"btn-category active":"btn-category"}>Recomendados</button>
              <button onClick={()=>activeCategory("Arepas")}className={showcategories==="Arepas"?"btn-category active":"btn-category"}>Arepas</button>
              <button onClick={()=>activeCategory("Adicionales")}className={showcategories==="Adicionales"?"btn-category active":"btn-category"}>Adicionales</button>
              <button onClick={()=>activeCategory("Bebidas Naturales")}className={showcategories==="Bebidas Naturales"?"btn-category active":"btn-category"}>Bebidas Naturales</button>
              <button onClick={()=>activeCategory("Bebidas Gaseosa")}className={showcategories==="Bebidas Gaseosa"?"btn-category active":"btn-category"}>Bebidas Gaseosa</button>
            </div>
          </div>
         
        </div>
    )
    }
    export default ContainerCategories;