import React from "react"
import Media from 'react-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
const NavHeader = ({handleClick,show ,route})=> {  
    return(

      <div className={show}>
        <Link to = {route}>
        <button class="back">
        {/*   <i class="fas fa-angle-left"></i> */}
       {/*  <FontAwesomeIcon icon={faChevronLeft} /> */}
       
        <FontAwesomeIcon icon="chevron-left" />
        
        </button>
        </Link>
        <input type="text" className="input"/>
        <button class="search">
          {/* <i class="fas fa-search"></i> */}
          {/* <FontAwesomeIcon icon={faSearch} /> */}
          <FontAwesomeIcon icon="search"  onClick={handleClick}/>
         
          {/* <input id="search" type="text" name="search" onChange={handleClick}/> */}
          {/* <i className="fas fa-search"></i> */}
   
        </button>
        


      </div>

    )
}
export default NavHeader;



