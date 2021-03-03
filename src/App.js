import {BrowserRouter,Switch,Route } from "react-router-dom"
import Index2 from "./pages/Index2"
import View from "./pages/View"
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronLeft, faSearch ,faShoppingCart, faHome, faCog} from '@fortawesome/free-solid-svg-icons';


library.add(fab, faChevronRight, faChevronLeft, faSearch,faShoppingCart, faHome, faCog)

function App() {
  return (
   <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index2}/>
        <Route exact path="/view" component={View}/>
      </Switch>
   </BrowserRouter>   
  );
}

export default App;
