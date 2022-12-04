import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">

        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/explore" exact element={ <Explore /> } />
        </Routes>
        
          
      </Container>
    </BrowserRouter>  
  );
}

export default App;
