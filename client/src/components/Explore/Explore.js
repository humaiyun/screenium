import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  getTrendingMovies,
  getTrendingTV,
  //getSearchQuery,
  getSearchMovies,
  getSearchTV,
  getSearchPeople,
} from "../../api/api";
import { Link } from "react-router-dom";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [didSearch, setDidSearch] = useState(false);
  const [currFilter, setCurrFilter] = useState("movies");

  const [trendingMovies, setTrendingMovies] = useState(null);
  const [trendingTV, setTrendingTV] = useState(null);

  const [searchedResults, setSearchedResults] = useState(null);

  const imagePath = "https://image.tmdb.org/t/p/w300";

  const onSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getTrendingMovies().then((res) =>
        setTrendingMovies([...res.data.results])
      );
      await getTrendingTV().then((res) => setTrendingTV([...res.data.results]));
    };

    fetchData();
  }, []);

  const changeCurrFilter = () => {
    const filterInput = document.getElementById("filter").value;
    setCurrFilter(filterInput);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    setDidSearch(true);

    const searchInput = document.getElementById("search").value;
    const filterInput = document.getElementById("filter").value;

    const searchQueryMovies = async (query) => {
      await getSearchMovies(query)
        .then((res) => {
          setSearchedResults([...res.data.results]);
        })
        .then(() => console.log(searchedResults));
    };

    const searchQueryTV = async (query) => {
      await getSearchTV(query)
        .then((res) => {
          setSearchedResults([...res.data.results]);
        })
        .then(() => console.log(searchedResults));
    };

    const searchQueryPeople = async (query) => {
      await getSearchPeople(query)
        .then((res) => {
          setSearchedResults([...res.data.results]);
        })
        .then(() => console.log(searchedResults));
    };

    if (filterInput === "movies") {
      searchQueryMovies(searchInput);
    } else if (filterInput === "tvShows") {
      searchQueryTV(searchInput);
    } else if (filterInput === "people") {
      searchQueryPeople(searchInput);
    }
  };

  const linkToDetailsPage = (id) => {
    if (currFilter === "movies") {
      return `/explore/movie/${id}`;
    } else if (currFilter === "tvShows") {
      return `/explore/tv/${id}`;
    } else if (currFilter === "people") {
      return `/explore/person/${id}`;
    }
  };

  return (
    <Container maxWidth="lg" className="mb-52">
      <Box
        sx={{
          padding: 0,
          position: "relative",
          textAlign: "center",
          color: "#FFF",
        }}
      >
        <img
          src="https://i.imgur.com/PUNnWrH.png"
          alt="Header explore"
          style={{ width: "100%" }}
        />
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "50%",
            left: "20%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Start Exploring.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: "65%",
            left: "31%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Millions of movies, TV shows, and people to discover.
        </Typography>
      </Box>

      <div className="place-items-center mb-12 mt-5">
        <form id="searchForm" name="searchForm">
          <div className="grid grid-cols-5">
            <input
              className="p-5 col-span-3 text-3xl rounded-l-full text-black mt-3 mb-3 ml-3"
              type="text"
              name="search"
              id="search"
              placeholder="Search for a movie, tv show, person, etc......"
              onChange={onSearchQueryChange}
            />
            <select
              name="filter"
              id="filter"
              className="text-black  p-5 mt-3 mb-3 text-xl font-bold"
              onChange={changeCurrFilter}
            >
              <option value="movies">Movies</option>
              <option value="tvShows">TV Shows</option>
              <option value="people">People</option>
            </select>
            <button
              className="bg-main-primary p-5 mt-3 mb-3 mr-3 rounded-r-full text-3xl font-semibold hover:bg-main-secondary hover:scale-105 active:scale-100 transition duration-300 hover:text-black"
              disabled={searchQuery?.length < 3}
              onClick={searchSubmit}
            >
              SEARCH
            </button>
          </div>
        </form>
      </div>

      {didSearch ? (
        <div className="mb-16">
          <button
            className=" bg-main-primary p-5 text-3xl font-semibold w-full rounded-full hover:bg-main-secondary hover:scale-105 active:scale-100 transition duration-300 hover:text-black mb-10"
            onClick={() => {
              setDidSearch(false);
              setSearchedResults(null);
            }}
          >
            CLEAR SEARCH RESULTS
          </button>
          <div>
            <h1 className="text-5xl mb-10">
              Showing {searchedResults?.length} results for "{searchQuery}":
            </h1>

            {searchedResults?.length ? (
              <div className="grid grid-flow-row gap-5">
                {searchedResults?.map((res, i) => (
                  <div
                    key={i}
                    className="bg-[#303461] rounded-2xl cursor-pointer"
                  >
                    <Link to={linkToDetailsPage(res?.id)}>
                      <div className="grid grid-cols-4">
                        <img
                          className="rounded-t-xl pointer-events-none max-h-[300px]"
                          src={`${imagePath}${
                            res?.poster_path || res?.profile_path
                          }`}
                          alt={res?.original_title}
                          loading="lazy"
                        />
                        <div className="grid grid-flow-row col-span-3 p-3">
                          <h1 className="text-3xl font-bold py-5">
                            {res?.original_title || res?.name}
                            <span className="ml-10 text-2xl">
                              {res?.first_air_date ||
                                res?.release_date ||
                                res?.known_for_department}
                            </span>

                            {res?.vote_average ? (
                              <span className="ml-10 text-2xl bg-main-background border border-white p-3 rounded-full">
                                ⭐ {res?.vote_average.toFixed(1)}
                              </span>
                            ) : null}
                          </h1>
                          <h2 className="text-md">{res?.overview}</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <div>
        <h1 className="text-3xl text-left font-semibold">Popular Movies</h1>
        <div className="grid grid-cols-5 gap-1 rounded-lg">
          {trendingMovies?.slice(0, 5).map((movie) => (
            <div key={movie?.id} className="bg-[#303461] rounded-xl">
              <img
                className="rounded-t-xl pointer-events-none"
                src={`${imagePath}${movie?.poster_path}`}
                alt={movie?.original_title}
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-1 place-items-center">
                <div className="bg-main-secondary font-bold text-xl p-2 m-3 rounded-full text-black text-center">
                  ⭐{movie?.vote_average?.toFixed(1)}
                </div>
                <h2 className="text-lg p-2 font-light">
                  {movie?.release_date}
                </h2>
              </div>
              <h1 className="text-xl p-2">{movie?.original_title}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="my-16">
        <h1 className="text-3xl text-left font-semibold">Popular TV Shows</h1>
        <div className="grid grid-cols-5 gap-1 rounded-lg">
          {trendingTV?.slice(0, 5).map((tv) => (
            <div key={tv?.id} className="bg-[#303461] rounded-xl">
              <img
                className="rounded-t-xl pointer-events-none"
                src={`${imagePath}${tv?.poster_path}`}
                alt={tv?.name}
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-1 place-items-center">
                <div className="bg-main-secondary font-bold text-xl p-2 m-3 rounded-full text-black text-center">
                  ⭐{tv?.vote_average?.toFixed(1)}
                </div>
                <h2 className="text-lg p-2 font-light">{tv?.first_air_date}</h2>
              </div>
              <h1 className="text-xl p-2">{tv?.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Explore;
