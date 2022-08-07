import {useEffect, useState} from 'react'
import Movie from '../components/Movie'

const Home = () => {
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
  
    const getMovieApi = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
      useEffect(() => {
        getMovieApi();
      },[]);
  return (
    <>
    <h1>Movie App</h1>
        <div>
          { loading ? <h2>Loading...</h2> : movies.map((movie) => (
            <Movie id={movie.id} mediumCoverImage={movie.medium_cover_image} title={movie.title} 
            summary={movie.summary} year={movie.year} rating={movie.rating} genres={movie.genres} />
            ))}
        </div>
     </>
  )
}


export default Home;