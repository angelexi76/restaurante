import React, { useState } from "react"
import { Link } from "react-router-dom";
import logo1 from '../assets/img/logo1.png';




function Start() {
 
 return (

  <div className="container-start">
     <div className="curved-div upper">
       
        
        <svg viewBox="0 0 400 300">
          <path fill="#EE2C2C" fill-opacity="1" d="M0,1L59,81C96,129,192,224,288,224C384,224,480,128,576,90.7C672,93,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,488,320C192,320,96,350,98,320L0,320Z"></path>
        </svg>
      </div> 
      
      <div className="curved-div">
        <h1 className="title">El Satélite</h1>
        <p>Las Mejores Arepas de la Ciudad</p>
        <svg viewBox="0 0 1440 319">
          <path fill="#fff" fill-opacity="1" d="M0,32L48,88C96,148,192,294,310,254C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,190,1492,182L1440,160L1440,320L1392,320C1344,320,1248,330,1152,320C1056,430,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,196,320,78,320L0,320Z"></path>
        </svg>
      </div>

        <div className="mov">
       <div className="container-log">
        <img src={logo1}/>
       </div>
       </div>
       
    
         
         <div className=" container-mas">
           <Link to ="/index">
             <button class="next">
               Conoce Nuestro Menú
             </button>
             </Link>
         </div>
      
       </div>
 )
 
 }


export default Start;

