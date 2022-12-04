import React from 'react'
import { Typography, AppBar, Toolbar, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import logoImage from "../../assets/images/logo.png"

//303461
// TODO: Create theme colors for primary, secondary, etc.
const NavBar = () => {
  return (
    <AppBar position="static" color="primary" 
        sx={{ 
            backgroundColor: '#303461', 
            padding: "10px",
    }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography  
            variant="h6" 
            component={Link} 
            to="/explore" 
            sx={{ 
                display: { xs: 'none', md: 'flex' },
                marginLeft: "10%",
            }}>
                <img src={logoImage} alt="screenium logo" width="300px" />
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: "10%" }}>
                <Button component={Link} to="/" color="inherit">Home</Button>
                <Button component={Link} to="/explore" color="inherit">Explore</Button>
                <Button component={Link} to="/forums" color="inherit">Forums</Button>
                <Button component={Link} to="/profile" color="inherit">Profile</Button>
                <Button component={Link} to="/login" color="inherit">Login</Button>
                <Button component={Link} to="/login?signup=true" color="primary" variant="contained">Sign Up</Button>
                <Button component={Link} to="/admin" color="inherit" variant="outlined">Admin Panel</Button>
            </Box>
            

        </Toolbar>
    </AppBar>
    
  )
}

export default NavBar