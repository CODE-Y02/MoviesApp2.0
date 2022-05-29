import React, { useEffect, useState } from "react";
import requests from "../../../movieRequest";
import axios from "../../../axios";
import "./Hero.css";
import StarIcon from "@mui/icons-material/Star";

const Img_base_url = "https://image.tmdb.org/t/p/original";
function Hero({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  //above use state used to get movies for banner using axios

  useEffect(() => {
    const fetchData = async () => {
      const receivedResponse = await axios.get(requests.fetchNetflixOrignals);
      setMovie(
        receivedResponse.data.results[
          Math.floor(Math.random() * receivedResponse.data.results.length)
        ]
      );
      return receivedResponse;
    };
    fetchData();
  }, []);

  return (
    movie.backdrop_path && (
      <>
        <div className="hero">
          <img
            src={Img_base_url + movie?.backdrop_path}
            className="hero-img"
            alt={movie.title || movie.name || movie.original_name}
          />

          <div className="hero-text-wrap">
            <h1 className="hero-title">
              {movie.title || movie.name || movie.original_name}
            </h1>
            <p>{`RELEASE YEAR | ${movie?.first_air_date?.slice(0, 4)}`}</p>
            <h4>
              RATING
              {
                <>
                  <StarIcon
                    alt="rating icon"
                    style={{
                      marginLeft: "2rem",
                    }}
                  />
                </>
              }
              <span
                style={{
                  marginLeft: "1rem",
                }}
              >
                {movie?.vote_average}
              </span>
            </h4>
            <div className="hero-btn-wrap">
              <button>Watch Now</button>
            </div>
          </div>
          <div className="hero_gradient"></div>
        </div>
      </>
    )
  );
}

export default Hero;
