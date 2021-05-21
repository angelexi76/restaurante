import React from 'react';





const Cart = ({total,message})=>  { 

 return (
  <footer>
  <div className="container-rectangular">
    <div className="total">
      <p>SubTotal</p>
      <p>{`$${total}`}</p>
    </div>
    <div className="total">
      <p>Costo Envío</p>
      <p>{total===0?"$0":'$1000'}</p> 
    </div>
    <div className="total">
      <p>Total</p>
      <p>{total===0?"$0":`$${total+1000}`}</p>   
    </div>
    

  <a href={`https://api.whatsapp.com/send?phone=573108003876&text=${message}`} rel="noreferrer" target='_blank' >
    <button className="Enviar">
      <h3>Enviar Pedido</h3>
    </button>
  </a>
</div>   

 </footer>


)
}          

            
export default Cart;
