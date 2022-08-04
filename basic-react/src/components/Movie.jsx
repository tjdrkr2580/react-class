import React from 'react'

const Movie = ({id,mediumCoverImage,title,summary,year,rating,genres}) => {
  return (

    <div key={id}>
    <img src={mediumCoverImage} />
    <h3>{title}</h3>
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