import React, { useState } from 'react';

function Movies() {
  const [movies] = useState([
    { id: 1, title: 'Movie 1', genre: 'Action' },
    { id: 2, title: 'Movie 2', genre: 'Comedy' },
    { id: 3, title: 'Movie 3', genre: 'Drama' },
  ]);

  return (
    <div className="container">
      <h2>Available Movies</h2>
      <ul className="list-group">
        {movies.map(movie => (
          <li key={movie.id} className="list-group-item">
            <h5>{movie.title}</h5>
            <p>Genre: {movie.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
