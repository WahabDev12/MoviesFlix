import "./App.css";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {Get} from "react-axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons';
import "./details.css"
import Navbar from "./Navbar";

const Details = () => {

    const {id} = useParams();
    const detailURL = `https://api.themoviedb.org/3/movie/${id}?api_key=8c34b7bbcfa2e36acc84e76631d21031&language=en-US`
    const videoURL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8c34b7bbcfa2e36acc84e76631d21031&language=en-US`

    return (
      <Get url={detailURL}>
        {(error, response, isLoading, makeRequest) => {
          if(error) {
            return (
            <div>Something bad happened: {error.message}
             <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button>
            </div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response) {
            return (
            <>
                <Navbar />
    <div className = "card-wrapper">
      <div className = "card-detail">
        <div className = "product-imgs">
          <div className = "img-display">
            <div className = "img-showcase">
              <img className="img-detail"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${response.data.poster_path}`}
              alt = "shoe image" />
            </div>
          </div>

    </div>
    <div className = "product-content">
      <h2 className = "product-title">{response.data.title}</h2>
      <div className = "product-rating">
      <FontAwesomeIcon style={{color:"gold"}} icon={faStar} />
      <FontAwesomeIcon style={{color:"gold"}} icon={faStar} />
      <FontAwesomeIcon style={{color:"gold"}} icon={faStar} />
      <FontAwesomeIcon style={{color:"gold"}} icon={faStar} />
          <span> {response.data.vote_average}/10</span>
      </div>

      <div className = "product-price">
        <p className = "new-price">Release Date <span>  {response.data.release_date}</span></p>
      </div>

      <div className = "product-detail">
        <h2>Overview</h2>
        <p>{response.data.overview}</p>
        <h4 style={{marginTop:"25px"}}>Genres</h4>
         <div className="genre">  
            { response.data.genres[0]["name"]}, 
            { response.data.genres[1]["name"]}

          </div>

      </div>

    
    </div>
  </div>
</div>   
</>
    )
          }
          return (<div>Default message before request is made.</div>)
        }} 
        
      </Get>  

     );
}
 
export default Details;
