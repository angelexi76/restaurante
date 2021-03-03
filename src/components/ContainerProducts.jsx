import React from "react"


const ContainerProducts = ({children})=> {
    return(
        <div className= "container-products">
                <h2>Recomendado</h2>
               {children}
        </div>
    )
}
    export default ContainerProducts;