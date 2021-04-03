import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
const NavHeader = ({handleClick,show ,route})=> {  
    return(

      <div className={show}>
        <Link to = {route}>
        <button class="back">
          <FontAwesomeIcon icon="chevron-left" />
        </button>
        </Link>
        <input type="text" className="input"/>
        <button class="search">
        
          <FontAwesomeIcon icon="search"  onClick={handleClick}/>
        </button>
      </div>

    )
}

export default NavHeader;



