import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests.js";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchComedyMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("click", () => {
      if (trailerUrl) {
        setTrailerUrl("");
      }
    });
    return () => {
      window.removeEventListener("click", () => {
        if (trailerUrl) {
          setTrailerUrl("");
        }
      });
    };
  });

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const opts = {
    height: "420",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url) => {
          // https://www.youtube.com/watch?v=WWo8Bg4Tlmk&t=2s
          //Just gets movie ID after v=
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <header
      className={`banner ${trailerUrl && "extenze"}`}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={() => handleClick(movie)}>
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
