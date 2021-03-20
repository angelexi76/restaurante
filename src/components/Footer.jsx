import React from "react"
import Media from 'react-media';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = ({conterglobal})=> {
    return(
        <footer>
          <Link to="/shopping-cart">
            <div class="btn-cart-container">
              {/* /* <i class="fas fa-shopping-cart"></i> */ }
              <FontAwesomeIcon icon="shopping-cart" />
              <span class="quantity">{conterglobal}</span>
            </div> 
          </Link>
          <div class="inner-btn-menu">
            {/*  /* <i class="fas fa-home"></i> 
              <FontAwesomeIcon icon="home" />*/ }
            {/*  /* <i class="fas fa-cog"></i> 
              <FontAwesomeIcon icon="cog" />*/ }
          </div>
        </footer>
    )

}
export default Footer;

/* Link: Este es utilizado para los enlaces (igual como etiquetas <a></a> */