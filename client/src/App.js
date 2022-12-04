import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container maxWidth="xl" sx={{ border: "1px solid white"}}>
        
        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/explore" exact element={ <Explore /> } />
        </Routes>
        
          
      </Container>
    </BrowserRouter>  
  );
}

export default App;
