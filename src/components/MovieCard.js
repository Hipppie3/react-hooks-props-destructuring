import React from "react";

function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{props.title}</h2>
      <small>{props.genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;
