import React, { useState, useEffect } from "react"
import logo1 from '../assets/img/logo1.png';



const ContainerNotice = ()=> {
  useEffect(()=>{
    time()
  }, [])
  const [date,setDate]= useState()
 function time() {
   var d = new Date();
   var n = d.getHours();
   if (18<=n&&n>23){
   setDate(true)
  
   }
   else{ setDate (false)}
 }
  
    return( 
    
    
      

      <div class="container-notice" id="container-notice">
          <div className="notice">
            <h1 className="notice-title">Bienvenidos</h1>
            <p className="notice-schedule">Horario de Lunes a Sabado</p>
            <p className="notice-time">6pm-11:30pm</p>
           </div>
          <div className="logo-container">
            <img src={logo1} alt="logo" class="logo" />
            <p className="logo-text">{date?"Abierto":"Cerrado"}</p>
          </div>
         </div>
      
    
    )
}
export default ContainerNotice;



