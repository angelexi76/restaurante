import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = ({conterglobal})=> {
    return(
        <footer>
          <Link to="/shopping-cart">
            <div class="btn-cart-container">
              
              <FontAwesomeIcon icon="shopping-cart" />
              <span class="quantity">{conterglobal}</span>
            </div> 
          </Link>
          <div class="inner-btn-menu">
           
          </div>
        </footer>
    )

}
export default Footer;
