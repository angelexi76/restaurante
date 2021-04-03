import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const shoppingCart = ({handleClick,show,back})=> {  
    return(

      <div className={show}>

        <button class="back">
      
        <FontAwesomeIcon icon="chevron-left" onClick ={back,handleClick} />
        </button>

        <input type="text" className="input"/>
        <button class="search">
         
          <FontAwesomeIcon icon="search"  onClick={handleClick}/>
        </button>
        


      </div>

    )
}
export default shoppingCart;