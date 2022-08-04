import React from 'react'
import {Link} from "react-router-dom"

const Movie = ({id,mediumCoverImage,title,summary,year,rating,genres}) => {
  return (

    <div key={id}>
    <img src={mediumCoverImage} />
    <Link to="/movie"><h3>{title}</h3></Link>
    <p>{summary}</p>
    <p>{year},{rating}</p>
    <ul>
      {genres.map((g) => <li key={g}>{g}</li>)}
    </ul>
    <hr />
  </div>
  )
}

export default Movie;