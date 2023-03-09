import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/api";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [didSearch, setDidSearch] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [popTV, setPopTV] = useState(null);

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
    };

    fetchData();
  }, []);

  const searchSubmit = (e) => {
    e.preventDefault();
    setDidSearch(true);
    console.log(trendingMovies);
    console.log(popTV);
  };

  return (
    <Container maxWidth="lg">
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
      <div className="place-items-center">
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
            <button className="bg-main-primary p-5 mt-3 mb-3 mr-3 rounded-r-full text-3xl font-semibold">
              SEARCH
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Explore;
