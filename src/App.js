import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faStar } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import MovieList from "./MovieList";
import SearchBar from "./Search";
import Navbar from "./Navbar";
import "./App.css";
import Trending from "./Trending";
const App = () => {
    return (
		<>
        <div classNameName="App">
	       <Navbar />
		   <SearchBar />
		   {/* <MovieList /> */}
           <Trending />
       </div>
</>

    )
}
 
export default App;