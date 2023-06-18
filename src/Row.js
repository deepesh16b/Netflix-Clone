import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://image.tmdb.org/t/p/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        console.log(request.data.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    const term = movie.title || movie.name;
    const url = `/trailer/${term.toLowerCase().replace(/\s/g, "%")}`;
    navigate(url);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${true && "row__posterLarge"}`}
                // true === isLargeRow
                src={`${baseUrl}${
                  true ? (`w342/${movie.poster_path}`) : (`w300/${movie.backdrop_path}`)
                }`}
            alt={movie.title}
            onClick={() => handleClick(movie)}
          />
        
        ))}
      </div>
    </div>
  );
};

export default Row;
