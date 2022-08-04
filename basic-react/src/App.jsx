import { useEffect, useState } from "react";

function App() {

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
    <div>
      <h1>Movie App</h1>
      {
        loading ? <h2>Loading ...</h2> : <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h3>{movie.title}</h3>
              <p>{movie.summary}</p>
              <p>{movie.year},{movie.rating}</p>
              <ul>
                {movie.genres.map((g) => <li key={g}>{g}</li>)}
              </ul>
            </div>
            ))}
        </div>
      }
    </div>
  );
}

export default App;