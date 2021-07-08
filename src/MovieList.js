import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay,faStar } from '@fortawesome/free-solid-svg-icons';

const MovieList = ({ title,release_date,poster_path,vote_average }) => {
    return (
<div className="movie-cards">

        <div  className="card movie_card">
  <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} className="card-img-top" alt={title + ' poster'} />
  <div className="card-body">
      <i className="play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
      <FontAwesomeIcon style={{textAlign:"center",marginBottom:"5px"}}  icon={faPlay} />
      </i>
    <h5 className="card-title">{title}</h5>
           <span className="movie_info">{release_date}</span>
           <span className="movie_info float-right"> <FontAwesomeIcon style={{color:"yellow"}} icon={faStar} />  {vote_average}</span>
  </div>
</div>

      </div>

    );
}
 
export default MovieList;