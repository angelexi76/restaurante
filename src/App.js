import {BrowserRouter,Switch,Route } from "react-router-dom"
import Index2 from "./pages/Index2"
import Order from "./pages/Order"
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronLeft, faSearch ,faShoppingCart, faHome, faCog} from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from "./pages/ShoppingCart"
import { useState } from "react";

library.add(fab, faChevronRight, faChevronLeft, faSearch,faShoppingCart, faHome, faCog)

function App() {
  const[conterglobal,setConterglobal]= useState(0)
  return (
   <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Index2 conterglobal={conterglobal} setConterglobal={setConterglobal}/>
        </Route>

        <Route exact path="/order" component={Order}/>
        <Route exact path="/shopping-cart" component={ShoppingCart}/>
      </Switch>
   </BrowserRouter>   
  );
}

export default App;
