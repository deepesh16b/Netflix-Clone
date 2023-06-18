import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import YouTube from "react-youtube";
import axios from "../axios";
import requests from "../requests";
import { useParams } from "react-router-dom";
import "./TrailerPage.css";

const TrailerPage = () => {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const { term } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const termWithoutHyphen = term.replace(/%/g, " ");
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${termWithoutHyphen}%20trailer&type=video&key=AIzaSyDsO7U0XfHpHyRZAeetxDnNOL98jI3Ir28`
        );
        const videoId =
          response.data.items.length > 0
            ? response.data.items[0].id.videoId
            : "";
        setTrailerUrl(videoId);
      } catch (error) {
        console.log(error);
        setTrailerUrl("");
      }
    };

    fetchData();

    const fetchMovie = async () => {
      try {
        const requestsArray = Object.values(requests); // Get an array of all the request URLs
        const requestsPromises = requestsArray.map((url) => axios.get(url)); // Fetch data for each category

        const responses = await Promise.all(requestsPromises); // Wait for all the requests to resolve

        const movies = responses.flatMap((response) => response.data.results); // Concatenate the movie data from all categories

        const selectedMovie = movies.find((movie) => {
          const lowercaseTitle = movie.title && movie.title.toLowerCase();
          const lowercaseName = movie.name && movie.name.toLowerCase();
          const lowercaseTerm = term.toLowerCase().replace(/%/g, " ");
          console.log("title", lowercaseTitle);
          console.log("name", lowercaseName);
          console.log("term", lowercaseTerm);
          return (
            (lowercaseTitle && lowercaseTitle === lowercaseTerm) ||
            (lowercaseName && lowercaseName === lowercaseTerm)
          );
        });

        if (selectedMovie) {
          const imageUrl = `https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`;
          selectedMovie.poster_path = imageUrl;

          // Retrieve the backdrop image
          const backdropUrl = `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`;
          selectedMovie.backdrop_path = backdropUrl;
        }

        setMovie(selectedMovie);
      } catch (error) {
        console.log(error);
        setMovie(null);
      }
    };

    fetchMovie();
  }, [term]);

  const opts = {
    height: window.screen.width > 800? '400' : '280',
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  console.log(movie);

  return (
    <div className="wrapper">
      <Nav />
      {movie && (
        <div className="trailerWrapper">
          <div className="trailer">
            {trailerUrl && (
              <YouTube
                style={{
                  alignItems: "center",
                  margin: "20px 0",
                  justifyContent: "center",
                }}
                videoId={trailerUrl}
                opts={opts}
              />
            )}
          </div>
          <div className="movieDetail ">
            <img
              className="image"
              src={movie.poster_path}
              alt={movie.title || movie.name}
            />
            <h1 className="">{movie.title || movie.name}</h1>
            <hr className="divider" />
            <p className="">{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrailerPage;
