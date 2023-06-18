import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import requests from "./requests";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const request1 = await axios.get(requests.fetchNetflixOriginals1);
      const request2 = await axios.get(requests.fetchNetflixOriginals2);
      const request3 = await axios.get(requests.fetchNetflixOriginals3);
      const request = request1.data.results.concat(
        request2.data.results.concat(request3.data.results)
      );

      setMovie(request[Math.floor(Math.random() * request.length - 1)]);
    }
    fetchData();
  }, []);

  const handleClick = async () => {
    const term = movie.title || movie.name;
    const url = `/trailer/${term.toLowerCase().replace(/\s/g, "%")}`;
    navigate(url);
  };

  const truncate = (string, n) =>
    string?.length > n ? string.substring(0, n) + "..." : string;

  const bannerTypeWithPath =
    window.screen.width > 800 ? movie?.backdrop_path : movie?.poster_path;

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerTypeWithPath}")`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      <div className="banner__fadeTop" />
      <div className="banner__content">
        {window.screen.width > 800 ? (
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
        ) : (
          <></>
        )}

        <div className="banner__buttons">
          <button className="banner__button play" onClick={handleClick}>
            <i className="fa-solid fa-play"> </i> Play
          </button>
          {window.screen.width > 800 ? (
            <button className="banner__button list">
              <i className="fa-solid fa-plus"> </i> My List
            </button>
          ) : (
            <i className="fa-solid fa-plus"> </i>
          )}
          <i className="fa fa-circle-info"></i>
        </div>
        {window.screen.width > 800 ? (
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        ) : (
          <></>
        )}
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;
