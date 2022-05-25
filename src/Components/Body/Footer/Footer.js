import React, { useEffect, useState } from "react";
import "./Footer.css";
import requests from "../../../movieRequest";
import axios from "../../../axios";
const Img_base_url = "https://image.tmdb.org/t/p/original";
function Footer(fetchUrl) {
  const [movie, setMovie] = useState([]);

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
    <div
      className="footer"
      style={{
        backgroundImage: `url(
       ${Img_base_url + movie?.backdrop_path})
      `,
      }}
    >
      <h2>gooter </h2>
      {/* text */}

      {/* subscribe */}
    </div>
  );
}

export default Footer;
