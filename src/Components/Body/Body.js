import React, { useEffect, useState } from "react";
import "./Body.css";
import axios from "../../axios";
import Hero from "./Hero/Hero";
import movieRequests from "../../movieRequest";
import Footer from "./Footer/Footer";
import Video from "./Video/Video";
// above asios is not axios its instance , we can rename it exports ,and if not def expo use { exported var/fun}

// img base url https://image.tmdb.org/t/p/original/<<<ImgURL>>
/**tmdb api give <<Imgurl>>
 * and we need to apprnd it in baseimg url
 *
 */

const Img_base_url = "https://image.tmdb.org/t/p/original";

function Body() {
  // console.log(movieRequests.fetchTopRatedTV); --> fetching url

  return (
    <div className="body">
      {/* hero */}
      <Hero fetchUrl={movieRequests.fetchNetflixOrignals} />

      {/* videos grid */}
      <Video
        title="NETFLIX ORIGNALS"
        fetchUrl={movieRequests.fetchNetflixOrignals}
      />
      <Video title="TRENDING" fetchUrl={movieRequests.fetchTrending} />

      <Video
        title="TOP RATED MOVIES"
        fetchUrl={movieRequests.fetchTopRatedMovie}
      />
      <Video
        title="TOP RATED SERIES"
        fetchUrl={movieRequests.fetchTopRatedTV}
      />
      <Video
        title="TRENDING MOVIES"
        fetchUrl={movieRequests.fetchTrendingMovie}
      />
      <Video title="TRENDING SERIES" fetchUrl={movieRequests.fetchTrendingTv} />
      <Video title="HORROR" fetchUrl={movieRequests.fetchHorrorMovies} />
      <Video title="ACTION" fetchUrl={movieRequests.fetchActionMovies} />
      <Video title="ROMANCE" fetchUrl={movieRequests.fetchRomanceMovies} />

      <Video title="COMEDY" fetchUrl={movieRequests.fetchComedyMovies} />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Body;
