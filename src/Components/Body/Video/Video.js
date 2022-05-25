import React, { useEffect, useState } from "react";
import "./Video.css";
import requests from "../../../movieRequest";
import axios from "../../../axios";
import { color } from "@mui/system";

const Img_base_url = "https://image.tmdb.org/t/p/original";

function Video({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //   useeffect -> runs on condn/variable change or render

  useEffect(() => {
    //   if [], runs when row loads and dont run again

    // internal async fun to fetch data
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);

      return response;
    };
    fetchData();
    // console.log(movies);
  }, [fetchUrl]);
  // console.log(movies);

  const moviesNew = movies.slice(0, 10);
  //const items = list.slice(0, size)

  return (
    <div className="video" key={movies.length * title.length * 0.17856}>
      <h2>
        {title}
        <hr className="video_hr" />
      </h2>

      <div className="video_container_grid">
        {moviesNew.map((movieObj) => (
          <>
            <div className="video_card" key={movieObj.id}>
              <img
                src={Img_base_url + movieObj?.poster_path}
                key={movieObj.id + movieObj.poster_path}
              />
              <div className="card_shadow">
                <a href="#">MORE</a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Video;
