import React from 'react';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({ title, poster, genres, synoposis }) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        {poster && <MoviePoster poster={poster} />}
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synoposis}
            maxLine="3"
            ellipsis=" ..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
}

function MoviePoster({ poster, alt }) {
  return (
    <>
      <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    </>
  );
}

function MovieGenre({ genre }) {
  return (
    <>
      <span className="Movie__Genre">{genre}</span>
    </>
  );
}

export default Movie;
