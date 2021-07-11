import "./App.css";
import "./App.css";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";

const App = () => {
    return (
		<>
        <div classNameName="App">
            <Router>
            <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/details/:id" component={Details} />
           </Switch>
           </Router>
	
       </div>
</>

    )
}
 
export default App;