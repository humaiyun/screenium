import { Box, Card, Chip, CircularProgress, Container, Grid, Skeleton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDiscoverPopularMovies, getTrendingMovies } from '../../api/api';
import StarIcon from '@mui/icons-material/Star';
import PercentIcon from '@mui/icons-material/Percent';
import { Stack } from '@mui/system';

const Explore = () => {

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Explore</Typography>
      <Box sx={{
        padding: 0,
        position: "relative",
        textAlign: "center",
        color: "#FFF",
      }}>
        <img src="https://i.imgur.com/PUNnWrH.png" alt="Header explore" style={{ width: "100%" }} />
        <Typography variant="h3" sx={{
          position: "absolute",
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%)"
        }}>Start Exploring.</Typography>
      </Box>
    </Container>
  )
}

export default Explore