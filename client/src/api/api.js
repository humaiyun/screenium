import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_TMDB_BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

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
// export const getDetailsByID = (id) =>
//   API.get(
//     `/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${id}&page=1`
//   );
export const getMovieDetails = (id) =>
  API.get(
    `/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );
export const getTVDetails = (id) =>
  API.get(
    `/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );
export const getPersonDetails = (id) =>
  API.get(
    `/person/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );

// Reviews for movie and tv shows
export const getMovieReviews = (id) =>
  API.get(
    `/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
  );
export const getTVReviews = (id) =>
  API.get(
    `/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
  );

// Auth: Sign up, Sign In
export const signUp = (formData) =>
  API.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/signup`, formData);

export const signIn = (formData) =>
  API.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/signin`, formData);
