import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from './components/Explore/Explore.js';
import Home from './components/Home/Home.js';
import NavBar from './components/NavBar/NavBar.js';
import Forums from "./components/Forums/Forums.js"
import Profile from "./components/Profile/Profile.js"
import Login from "./components/Login/Login.js"
import Admin from "./components/Admin/Admin.js"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container maxWidth="xl" sx={{ border: "1px solid white"}}>
        
        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/explore" exact element={ <Explore /> } />
          <Route path="/forums" exact element={ <Forums /> } />
          <Route path="/profile" exact element={ <Profile /> } />
          <Route path="/login" exact element={ <Login /> } />
          <Route path="/admin" exact element={ <Admin /> } />
        </Routes>
        
          
      </Container>
    </BrowserRouter>  
  );
}

export default App;
