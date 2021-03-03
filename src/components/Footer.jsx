import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = ()=> {
    return(
        <footer>
        <div class="btn-cart-container">
          {/* /* <i class="fas fa-shopping-cart"></i> */ }
          <FontAwesomeIcon icon="shopping-cart" />
          <span class="quantity">1</span>
        </div>
        <div class="inner-btn-menu">
         {/*  /* <i class="fas fa-home"></i> */ }
          <FontAwesomeIcon icon="home" />
         {/*  /* <i class="fas fa-cog"></i> */ }
          <FontAwesomeIcon icon="cog" />
        </div>
      </footer>
    )

}
export default Footer