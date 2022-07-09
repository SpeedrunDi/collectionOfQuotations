import {BrowserRouter} from "react-router-dom";
import QuotesBlock from "./containers/QuotesBlock/QuotesBlock";
import NavMenu from "./containers/NavMenu/NavMenu";
import './App.css';

const App = () => (
 <BrowserRouter>
   <header className="header">
     <NavMenu/>
   </header>
   <QuotesBlock/>
 </BrowserRouter>
);

export default App;
