import { useEffect, useState } from "react"
import Movie from '../Movie/index'
import Styles from './randomMovie.module.css'


export default function Index() {
  //movie state
  const [movie, setMovie] = useState('');
  //random movies
  const [movies, setMovies] = useState([]);

  //get popular movies
  const getMovies = async () => {
    //fetch movie
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2981946d7a75ea943692c98fb27ce426&language=en-US&page=1`);
    let data = await response.json();
    //set movies array
    setMovies(data.results);
  }

  //Will choose a random movie from the movies state
  const getRandomMovie = () => {
    let randomNumber = Math.floor(Math.random() * movies.length);
    if(randomNumber !== undefined){
      setMovie(movies[randomNumber]);
    }
  }

  //Will call getMovies function on start of application
  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div className={Styles.container}>
        <button onClick={getRandomMovie} className={Styles.btn} >choose a random movie</button>
        <div className="movies">
          <Movie movie={movie}/>
        </div>
    </div>
  )
}
