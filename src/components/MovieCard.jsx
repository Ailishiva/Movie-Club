import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const handleClick = () => {
    props.setMovieId(props.id);
  };

  return (
    <>
    <div className="movie-card">
      <Link to={"/movie/" + props.id}>
        <img
          src={`https://image.tmdb.org/t/p/original/${props.poster}`}
          alt="movie"
          className="movie-img"
          onClick={handleClick}
          >
        </img>
      </Link>
      <h4 className="movie-tit">{props.title}</h4>
      <h6 className="rel-date">Release Date: {props.release_date}</h6>
      <p className="descrip" >{props.overview.slice(0,150)}</p>
          </div>
</>
  );
};

export default MovieCard;
