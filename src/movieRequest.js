import { API_KEY } from "./privateApiKey";

const requests = {
  fetchNetflixOrignals: `discover/tv?api_key=${API_KEY}&with_networks=213
      `,
  fetchTrendingTv: `trending/tv/day?api_key=${API_KEY}`,
  fetchTrendingMovie: `trending/movie/day?api_key=${API_KEY}`,
  fetchTrending: `trending/all/day?api_key=${API_KEY}`,
  fetchTopRatedMovie: `movie/top_rated?api_key=${API_KEY}`,
  fetchTopRatedTV: `tv/top_rated?api_key=${API_KEY}`,

  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35
    `,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `
    /discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchAnimeMovies: `
    /discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
};

export default requests;
