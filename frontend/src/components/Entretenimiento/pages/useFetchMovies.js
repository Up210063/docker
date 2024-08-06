import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Obtener las películas populares
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?api_key=91c9457b25b793ab9f61c74c924bc216&language=es'
        );
        
        const moviesData = response.data.results;

        // Obtener tráilers para cada película
        const moviesWithTrailers = await Promise.all(
          moviesData.map(async (movie) => {
            const trailerResponse = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=91c9457b25b793ab9f61c74c924bc216&language=es`
            );

            const trailers = trailerResponse.data.results;
            const officialTrailer = trailers.find(
              (trailer) =>
                trailer.type === 'Trailer' && trailer.site === 'YouTube'
            );

            return {
              ...movie,
              trailerUrl: officialTrailer
                ? `https://www.youtube.com/watch?v=${officialTrailer.key}`
                : null,
            };
          })
        );

        setMovies(moviesWithTrailers);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useFetchMovies;
