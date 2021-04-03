import {BrowserRouter, Route, Switch} from "react-router-dom";
import Index2 from "./pages/Index2";
import Start from "./pages/Start";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronLeft, faSearch ,faShoppingCart, faHome, faCog, faSquare} from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from "./pages/ShoppingCart"
import { useState } from "react";

library.add(fab, faChevronRight, faChevronLeft, faSearch,faShoppingCart, faHome, faCog ,faSquare)

function App() {
  const[conterglobal,setConterglobal]= useState(0)
  const [showCategory, setShowCategory]=useState("Recomendados")
  const[list,setList]=useState([])

  return (
   <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Start}/>
        <Route exact path="/index">
          <Index2 conterglobal={conterglobal} setConterglobal={setConterglobal} showCategory={showCategory} setShowCategory={setShowCategory} list={list} setList={setList}/>
            
        </Route>
          
        
        <Route exact path="/shopping-cart">
          <ShoppingCart conterglobal={conterglobal} setConterglobal={setConterglobal} showCategory={showCategory}list={list} setList={setList}/>
        </Route>
        
      </Switch>
   </BrowserRouter>   
  );
}

export default App;

