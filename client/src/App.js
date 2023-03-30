import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./components/Explore/Explore.js";
import Home from "./components/Home/Home.js";
import NavBar from "./components/NavBar/NavBar.js";
import Forums from "./components/Forums/Forums.js";
import Profile from "./components/Profile/Profile.js";
import Login from "./components/Login/Login.js";
import Admin from "./components/Admin/Admin.js";
import Footer from "./components/NavBar/Footer.js";
import MovieDetailsPage from "./components/Explore/MovieDetailsPage.js";
import TvDetailsPage from "./components/Explore/TvDetailsPage.js";
import PersonDetailsPage from "./components/Explore/PersonDetailsPage.js";
import MovieDiscussions from "./components/Forums/MovieDiscussions.js";
import TVDiscussions from "./components/Forums/TVDiscussions.js";
import MovieDiscussionDetails from "./components/Forums/MovieDiscussionDetails.js";
import TVDiscussionDetails from "./components/Forums/TVDiscussionDetails.js";
import NewMovieDiscussion from "./components/Forums/NewMovieDiscussion.js";
import NewTVDiscussion from "./components/Forums/NewTVDiscussion.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container maxWidth="xl" sx={{}}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/explore" exact element={<Explore />} />
          <Route
            path="/explore/movie/:id"
            exact
            element={<MovieDetailsPage />}
          />
          <Route path="/explore/tv/:id" exact element={<TvDetailsPage />} />
          <Route
            path="/explore/person/:id"
            exact
            element={<PersonDetailsPage />}
          />
          <Route path="/forums" exact element={<Forums />} />
          <Route path="/forums/movie" exact element={<MovieDiscussions />} />
          <Route
            path="/forums/movie/:id"
            exact
            element={<MovieDiscussionDetails />}
          />
          <Route
            path="/forums/movie/submission"
            exact
            element={<NewMovieDiscussion />}
          />
          <Route
            path="/forums/tv/submission"
            exact
            element={<NewTVDiscussion />}
          />
          <Route path="/forums/tv" exact element={<TVDiscussions />} />
          <Route
            path="/forums/tv/:id"
            exact
            element={<TVDiscussionDetails />}
          />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/admin" exact element={<Admin />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
