//STYLES
import Styles from './movie.module.css'
export default function Index({movie}) {
    //EXTRACT MOVIE DETAILS
    const title = movie.original_title;
    const description = movie.overview;
    let movieImgPath = '';

    //POSTER
    if(movie.poster_path !== null){
        movieImgPath = 'http://image.tmdb.org/t/p/w185/' + movie.poster_path;
    }
    else {
        movieImgPath = './no-image-poster.jpg'
    }

 
  return (
    <div className={Styles.container}>
        <h2 className={Styles.title}>{title}</h2>
        <div className={Styles.movie_details}>
            <img className={Styles.poster} src={movieImgPath} alt="poster" />
            <p className={Styles.desc} >{description}</p>
        </div>
        
    </div>
  )
}
