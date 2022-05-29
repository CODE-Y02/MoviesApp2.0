import "./MoviePage.css";
// import { useParams } from "react-router-dom";
import movieState from "../recoil";
import { useRecoilState } from "recoil";

const Img_base_url = "https://image.tmdb.org/t/p/original";

function MoviePage() {
  // let params = useParams();
  const [movie] = useRecoilState(movieState);
  console.log(movie);

  // console.log(params);
  return (
    <div className="movie_">
      {/* sextion 1 -poster + button */}
      <div className="movie__poster_wrap">
        <img
          src={Img_base_url + movie?.poster_path}
          alt={
            movie.original_title ||
            movie.name ||
            movie.original_name ||
            movie.title
          }
          className="movie__poster"
        />
        <div className="movie__poster_info">
          <h1>
            {movie.original_title ||
              movie.name ||
              movie.original_name ||
              movie.title}
          </h1>
          <h2>Rating{`   |   ${movie?.vote_average}`}</h2>
          <button>Play</button>
        </div>
      </div>
      {/* section2 cast  */}
      <section className="movie__desc">
        <h2>Description</h2>
        {movie.overview}
      </section>
    </div>
  );
}

export default MoviePage;
