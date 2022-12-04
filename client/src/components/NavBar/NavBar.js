import React from 'react'
import { Typography, AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import logoImage from "../assets/images/logo.png"

//303461
const NavBar = () => {
  return (
    <AppBar position="static" color="primary" 
        sx={{ 
            backgroundColor: '#303461', 
            padding: "10px",
    }}>
        <Toolbar>
            <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
                textDecoration: "none", 
                color: "#FFF",
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Roboto',
                fontWeight: 400,
                letterSpacing: '.3rem',
                marginLeft: "10%",

            }}>
                <img src={logoImage} alt="screenium logo" width="300px" />
            </Typography>
            

        </Toolbar>
    </AppBar>
    
  )
}

export default NavBar