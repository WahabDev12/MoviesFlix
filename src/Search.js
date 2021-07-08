import "./App.css";
import { useState,useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import Trending from "./Trending";

const SearchBar = () => {

    const [query,setQuery] = useState("");
    const [movies,setMovies] = useState([]);
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=8c34b7bbcfa2e36acc84e76631d21031&language=en-US&query=${query}&page=1&include_adult=false`
    const trendingURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=8c34b7bbcfa2e36acc84e76631d21031&language=en-US&page=1&include_adult=false`

    var search = {
        method: 'GET',
        url: searchURL,
        mode:"no-cors",
        headers:{
          'Content-Type': 'application/json'
        }
      };

    var trending = {
      method: 'GET',
      url: trendingURL,
      mode:"no-cors",
      headers:{
        'Content-Type': 'application/json'
      }
    };
  
    
    const handleSearchMovies = async (e)=>{
        e.preventDefault();
        await axios.request(search).then((response) => {
            console.log(response.data.results);
            const movies = response.data.results;
            return setMovies(movies)
          }).catch((error)=> {
            console.error(error.message);
          });
        
    }

    useEffect(async () => {
      await axios.request(trending).then((response) => {
        console.log(response.data.results);
        const movies = response.data.results;
        return setMovies(movies)
      }).catch((error)=> {
        console.error(error.message);
      });
    }, [])



    return ( 
      <>
        <div className="search-div">
            <div className="wrapper">
    <div className="container">
      <form onSubmit={handleSearchMovies} role="search" method="get" className="search-form form" action="">
        <label>
            <span className="screen-reader-text">Search for...</span>
            <input
             onChange={(e)=> setQuery(e.target.value)}
             type="search"
             className="search-field"
             placeholder="Search for a movie...." 
             value={query}
            />
        </label>
        <input type="submit" className="search-submit button" value="Search" />
    </form>
    </div>
  </div>

        </div>
        <h2 className="trending">Latest Movies</h2>

        <div style={{display:"flex",flexDirecction:"row"}} className="movie-cards">
  {movies && movies.filter((movie) => movie.poster_path).map((movie) => (
            <MovieList {...movie} key={movie.id} />
          ))}
        </div>

        <div style={{display:"flex",flexDirecction:"row",flexWrap:"wrap"}} className="movie-cards">
  {movies && movies.filter((movie) => movie.poster_path || movie.title).map((movie) => (
            <Trending {...movie} key={movie.id} />
          ))}
        </div>
        </>
    );
}
 
export default SearchBar;