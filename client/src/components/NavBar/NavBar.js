import React, { useEffect, useState } from "react";
import { Typography, AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [userType, setUserType] = useState("user");

  const location = useLocation();

  useEffect(() => {
    setUserType(user?.userType);
  }, [location]);

  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        backgroundColor: "#303461",
        padding: "10px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/explore"
          sx={{
            display: { xs: "none", md: "flex" },
            marginLeft: "10%",
          }}
        >
          <img src={logoImage} alt="screenium logo" width="300px" />
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" }, marginRight: "10%" }}>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/explore" color="inherit">
            Explore
          </Button>
          <Button component={Link} to="/forums" color="inherit">
            Forums
          </Button>
          <Button component={Link} to="/profile" color="inherit">
            Profile
          </Button>

          {/* TODO: conditional rendering of these 3 buttons based on logged in & user role */}
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>

          <Button
            component={Link}
            to="/login?signup=true"
            variant="contained"
            sx={{
              backgroundColor: "#318986",
              marginRight: 1,
              borderRadius: "10px",
            }}
          >
            Sign Up
          </Button>

          <Button
            component={Link}
            to="/admin"
            variant="contained"
            sx={{
              backgroundColor: "#D8ECEB",
              color: "black",
              borderRadius: "10px",
            }}
          >
            Admin Panel
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
