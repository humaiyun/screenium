import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_TMDB_BASE_URL });

// Explore Page
// export const getDiscoverPopularMovies = () => API.get(`/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);

export const getTrendingMovies = () =>
  API.get(`/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
export const getTrendingTV = () =>
  API.get(`/trending/tv/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
export const getSearchQuery = (query) =>
  API.get(
    `/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}`
  );
export const getDetailsByID = (id) =>
  API.get(
    `/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${id}&page=1`
  );
