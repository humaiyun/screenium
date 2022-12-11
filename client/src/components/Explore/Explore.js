import { Box, Card, Chip, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDiscoverPopularMovies, getTrendingMovies } from '../../api/api';
import StarIcon from '@mui/icons-material/Star';
import PercentIcon from '@mui/icons-material/Percent';
import { Stack } from '@mui/system';

const Explore = () => {
  
  const [popularMovies, setPopularMovies] = useState({});
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchPopularMovies = async () => {
    const data = await getDiscoverPopularMovies();
    return data.data;
  }

  useEffect(() => {
    fetchPopularMovies()
      .then(res => setPopularMovies({ ...res }))
      .catch(err => console.log(err))
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Explore</Typography>

      <Container maxWidth="md" sx={{ border: "1px solid white" }}>
      <Grid container spacing={2}>
        {popularMovies?.results?.map( (movie) => (
          <Grid container item xs={6} sm={4} md={3}>
            <Card sx={{ 
              backgroundColor: "#303461",
              borderRadius: "10px 10px 0 0",

            }}>
            {/* ${process.env.REACT_APP_TMDB_POSTER_PATH_W500} */}
              <img src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`} alt={`${movie?.original_title}`} />
              <Box sx={{ padding: 2 }}>
                <Box sx={{ marginBottom: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip 
                      sx={{ color: "#FFF" }} 
                      icon={<PercentIcon />} 
                      color={ (movie?.vote_average > 7) ? "success" : (movie?.vote_average > 5) ? "warning" : "error" }
                      label={movie?.vote_average * 10} 
                      variant="filled" 
                    />
                    <Chip 
                      sx={{ color: "#FFF" }} 
                      icon={<StarIcon />} 
                      color="warning"
                      label={movie?.vote_average} 
                      variant="outlined" 
                    />
                  </Stack>
                </Box>
                <Typography sx={{ color: "#FFF" }} variant="body1">{ movie?.original_title }</Typography>
                <Typography sx={{ color: "#FFF" }} variant="body2"> {movie?.release_date }</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
        {console.log(popularMovies)}
    </Container>
  )
}

export default Explore