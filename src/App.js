import {BrowserRouter, Route, Switch} from "react-router-dom";
import QuotesBlock from "./containers/QuotesBlock/QuotesBlock";
import NavMenu from "./containers/NavMenu/NavMenu";
import './App.css';

const App = () => (
 <BrowserRouter>
   <header className="header">
     <NavMenu/>
   </header>
   <Switch>
     <Route path="/" exact component={QuotesBlock} />
     <Route render={() => <h1>Not Found</h1>}/>
   </Switch>
 </BrowserRouter>
);

export default App;
