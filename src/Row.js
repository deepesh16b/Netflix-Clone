import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row__posters">
        {movies?.map(
          (movie) =>
          (
            (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path )) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                key={movie.id}
                alt={movie.name}
              />
            
          )
        )}
      </div>
    </div>
  );
};
export default Row;
