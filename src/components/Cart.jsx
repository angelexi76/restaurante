import React,{ useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Media from 'react-media';
/* import {Link} from "react-router-dom"; */


const Cart = ({total,message})=>  { /*aca los recibo */




  return (
  <footer>
  <div className="container-rectangular">
    <div className="total">
      <p>SubTotal</p>
      <p>{`$${total}`}</p>   {/* dos simbolos uno de sintasis y el otro es el string q se renderiza */}
    </div>
    <div className="total">
      <p>Costo Envío</p>
      <p>{total===0?"$0":'$1000'}</p> {/* aca es como una condicion if le decimos total===0?este es el if es el entoncesme va renderizar 0lo q esta despues delos dos puntos es el else;sino se cumple me renderiza lo q esta despues delos dos puntos  */} 
    </div>
    <div className="total">
      <p>Total</p>
      <p>{total===0?"$0":`$${total+1000}`}</p>   
    </div>
    

  <a href={`https://api.whatsapp.com/send?phone=573194680119&text=${message}`} target='_blank'>
    <button className="Enviar">
      <h3>Enviar Pedido</h3>
  </button>
  </a>
  </div>   

</footer>


)

    
}          

            
export default Cart;
