import React, { useEffect, useState } from "react";
// import axios from "axios";
import { getMovies } from "../api/GetApi";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  // Create a Function to get movies
  const getMovieData = async () => {
    try {
      const res = await getMovies();

      // console.log(res.data.results);     ----> To check API Result on Console
      setMovies(res.data.results);
    } catch (err) {
      console.log(`Error is :- ${err}`);
    }
  };

  // Call the getMovieData() function in useEffect() because --> We want to render all movies at starting & only once
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    // Creating User Interface
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <div className="relative">
              {/* Movie Poster Image */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded-lg object-cover"
              />

              {/* Movies Release Date */}
              <span className="absolute top-2 left-2 text-xs px-2 py-1 bg-black/75 text-white font-bold rounded-lg">
                {movie.release_date}
              </span>

              {/* Movie Rating */}
              <span className="absolute top-2 right-2 text-xs px-2 py-1 bg-yellow-600 text-white font-bold rounded-lg">
                {" "}
                ⭐ {movie.vote_average.toFixed(1)}
              </span>
            </div>

            {/* Movie Title */}
            <h1 className="text-center font-semibold text-xl">{movie.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
