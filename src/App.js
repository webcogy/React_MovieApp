import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import './App.css';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://yts.mx/api/v2/list_movies.json?srot_by=rating',
      );
      setMovies(response.data.data.movies);
      console.log(response.data.data.movies);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) return <div className="App">로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!movies) return null;

  return (
    <div className={movies ? 'App' : 'App--loading'}>
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synoposis={movie.synopsis}
        />
      ))}
    </div>
  );
}

export default App;
