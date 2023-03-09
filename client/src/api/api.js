import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_TMDB_BASE_URL });

// Explore Page and Search
export const getTrendingMovies = () =>
  API.get(`/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
export const getTrendingTV = () =>
  API.get(`/trending/tv/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
export const getSearchQuery = (query) =>
  API.get(
    `/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}`
  );

// Specific Search i.e., movies, tv, people
export const getSearchMovies = (query) =>
  API.get(
    `/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}`
  );
export const getSearchTV = (query) =>
  API.get(
    `/search/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}`
  );
export const getSearchPeople = (query) =>
  API.get(
    `/search/person?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}`
  );

// Details for movie, tv, person
export const getDetailsByID = (id) =>
  API.get(
    `/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${id}&page=1`
  );
