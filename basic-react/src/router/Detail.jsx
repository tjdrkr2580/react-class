import {useEffect, useState} from 'react'
import {useParams , Link} from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    const [detailmovie,setDetailMovie] = useState([]);
    const getMovie = async() => {
        const json = await ( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetailMovie(json.data.movie);
       } 
    useEffect(()=>{ 
        getMovie();
    },[]);
  return (
    <div>
        <h1>{detailmovie.title} | {detailmovie.year} </h1>
        <img src={detailmovie.large_cover_image}/>
        <p>{detailmovie.description_full}</p>
        <br></br>
        <Link to="/"><h2>Back!</h2></Link>
    </div>
  )
}

export default Detail