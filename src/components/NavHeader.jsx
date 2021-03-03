import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NavHeader = ({handleClick,show,})=> {
    return(

      <div className={show}>

        <button className="back">
        {/*   <i class="fas fa-angle-left"></i> */}
       {/*  <FontAwesomeIcon icon={faChevronLeft} /> */}
        <FontAwesomeIcon icon="chevron-left" />
        </button>

        <input type="text" className="input"/>
        <button class="search">
          {/* <i class="fas fa-search"></i> */}
          {/* <FontAwesomeIcon icon={faSearch} /> */}
          <FontAwesomeIcon icon="search"  onClick={handleClick}/>
        </button>
        


      </div>

    )
}
export default NavHeader;



