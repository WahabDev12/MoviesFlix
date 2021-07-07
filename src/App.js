import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faStar } from '@fortawesome/free-solid-svg-icons'

const App = () => {
    return (
        <div classNameName="App">
<nav className="navbar">
  <a style={{paddingLeft:"30px"}} className="navbar-brand" href="#">
   MoviesFlix
  </a>
</nav>
	
<div className="container mt-5">
<div className="wrapper">
    <div className="container">
      <form role="search" method="get" className="search-form form" action="">
        <label>
            <span className="screen-reader-text">Search for...</span>
            <input type="search" className="search-field" placeholder="Search for a movie...." value="" name="s" title="" />
        </label>
        <input type="submit" className="search-submit button" value="Search" />
    </form>
    </div>
  </div>
 <div className="row justify-content-center">

		</div>
		<div className="movie-cards">

				<div className="card movie_card">
		  <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/Dyow9RgX4AElAGN.jpg" className="card-img-top" alt="..." />
		  <div className="card-body">
		  	<i className="play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
			  <FontAwesomeIcon style={{textAlign:"center",marginBottom:"5px"}}  icon={faPlay} />
		  	</i>
		    <h5 className="card-title">Toy Story 4</h5>
		   		<span className="movie_info">2019</span>
		   		<span className="movie_info float-right"> <FontAwesomeIcon style={{color:"yellow"}} icon={faStar} />  9 / 10</span>
		  </div>
		</div>

				<div className="card movie_card">
		  <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/captin-marvel-poster-international.jpg" className="card-img-top" alt="..." />
		  <div className="card-body">
		  	<i className="play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
			  <FontAwesomeIcon style={{textAlign:"center",marginBottom:"5px"}}  icon={faPlay} />

		  	</i>
		    <h5 className="card-title">Captain Marvel</h5>
		   		<span className="movie_info">2019</span>
		   		<span className="movie_info float-right"> <FontAwesomeIcon style={{color:"yellow"}} icon={faStar} />  9 / 10</span>
		  </div>
		</div>

				<div className="card movie_card">
		  <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Spider-Man-Far-From-Home-poster-1.jpg" className="card-img-top" alt />
		  <div className="card-body">
		  	<i className=" play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
			  <FontAwesomeIcon style={{textAlign:"center",marginBottom:"5px"}}  icon={faPlay} />

		  	</i>
		    <h5 className="card-title">Spider-Man: Far From Home</h5>
		   		<span className="movie_info">2019</span>
		   		<span className="movie_info float-right"> <FontAwesomeIcon style={{color:"yellow"}} icon={faStar} /> 9 / 10</span>
		  </div>
		</div>

				<div className="card movie_card " >
		  <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Alita-character-poster-1.jpg" className="card-img-top" alt="..." />
		  <div className="card-body">
		  	<i className=" play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
			  <FontAwesomeIcon style={{textAlign:"center",marginBottom:"5px"}}  icon={faPlay} />

		  	</i>
		    <h5 className="card-title">Alita: Battle Angel</h5>
		   		<span className="movie_info">2019</span>
		   		<span className="movie_info float-right"> <FontAwesomeIcon style={{color:"yellow"}} icon={faStar} /> 9 / 10</span>
		  </div>
		</div>	

	</div>

</div>
</div>



    )
}
 
export default App;