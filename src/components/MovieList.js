import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay,faStar } from '@fortawesome/free-solid-svg-icons';
import Truncate from 'react-truncate';
import { Link } from "react-router-dom";

const MovieList = ({ id, title,release_date,poster_path,vote_average }) => {
    return (
<div className="movie-cards">
        <Link style={{textDecoration:"none"}} 
        to={{pathname:`/details/${id}`}} >
        <div style={{cursor:"pointer"}}  className="card movie_card">
  <img className="img-path"
   src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} 
   className="card-img-top" alt={title + ' poster'} />
  <div className="card-body">
      <i className="play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
      <FontAwesomeIcon style={{textAlign:"center",marginBottom:"5px"}}  icon={faPlay} />
      </i>
      <h5 style={{color:"black"}} className="card-title"><Truncate lines={1} ellipsis={<span>...</span>} >{title} </Truncate></h5>
           <span className="movie_info">{release_date}</span>
           <span className="movie_info float-right"> <FontAwesomeIcon style={{color:"gold"}} icon={faStar} />  {vote_average}/10</span>
  </div>
</div>
</Link>

      </div>

    );
}
 
export default MovieList;