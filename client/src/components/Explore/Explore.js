import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTrendingMovies, getTrendingTV } from "../../api/api";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [didSearch, setDidSearch] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [trendingTV, setTrendingTV] = useState(null);

  const imagePath = "https://image.tmdb.org/t/p/w300";

  const onSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // TODO: Delete this after
  // useEffect(() => {
  //   console.log(searchQuery);
  // }, [searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      await getTrendingMovies().then((res) =>
        setTrendingMovies([...res.data.results])
      );
      await getTrendingTV().then((res) => setTrendingTV([...res.data.results]));
    };

    fetchData();
  }, []);

  const searchSubmit = (e) => {
    e.preventDefault();
    setDidSearch(true);
    console.log(trendingMovies);
    console.log(trendingTV);
  };

  return (
    <Container maxWidth="lg" className="mb-52">
      <Typography variant="h1">Explore</Typography>
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
        <form onSubmit={searchSubmit}>
          <div className="grid grid-cols-4">
            <input
              className="p-5 col-span-3 text-3xl rounded-l-full text-black mt-3 mb-3 ml-3"
              type="text"
              name="search"
              id="search"
              placeholder="Search for a movie, tv show, person, etc......"
              onChange={onSearchQueryChange}
            />
            <button
              className="bg-main-primary p-5 mt-3 mb-3 mr-3 rounded-r-full text-3xl font-semibold hover:bg-main-secondary hover:scale-105 active:scale-100 transition duration-300 hover:text-black"
              disabled={searchQuery.length < 3}
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
            onClick={() => setDidSearch(false)}
          >
            CLEAR SEARCH RESULTS
          </button>
          <div>
            <h1 className="text-6xl">Showing results for {searchQuery}...</h1>
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
                <div className="bg-main-secondary font-bold text-xl max-w-[50px] p-2 m-3 rounded-full text-black text-center">
                  {movie?.vote_average?.toFixed(1)}
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
                <div className="bg-main-secondary font-bold text-xl max-w-[50px] p-2 m-3 rounded-full text-black text-center">
                  {tv?.vote_average?.toFixed(1)}
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
