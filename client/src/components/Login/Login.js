import React, { useEffect } from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { Grid, Paper } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
};
const Login = () => {
  let [authMode, setAuthMode] = useState("login");
  const [formData, setFormData] = useState(initialState);

  const { pathname, search } = useLocation();

  useEffect(() => {
    search === "?signup=true" ? setAuthMode("signup") : setAuthMode("login");
  }, []);

  const changeMode = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login", formData);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Signup", formData);
  };

  if (authMode === "login") {
    return (
      <Grid className="place-items-center">
        <div className="p-20 bg-[#303461] m-56 rounded-2xl">
          {/* <Paper elevation={10} style={loginStyle}> */}
          <h1 className="text-5xl text-white font-bold text-center">
            Login to your account
          </h1>
          <h3 className="text-lg text-white text-center my-5">
            In order to use the forums and personal list capabilities, you will
            need to login to your account.
          </h3>

          <TextField
            label="Username"
            name="username"
            fullWidth
            required
            onChange={handleChange}
            placeholder="Enter your username"
            sx={{
              bgcolor: "#000732",
              input: { color: "white" },
              label: { color: "white" },
              margin: "20px 20px 20px 0px",
              borderRadius: "10px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon style={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            name="password"
            margin="30px"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            fullWidth
            required
            sx={{
              bgcolor: "#000732",
              input: { color: "white" },
              label: { color: "white" },
              margin: "20px 0px",
              borderRadius: "10px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon style={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
          />

          <button
            className=" bg-main-background px-5 py-2 mt-2 text-xl text-white font-semibold w-full rounded-xl border border-white hover:scale-105 active:scale-95 transition duration-200"
            onClick={handleLogin}
          >
            LOGIN
          </button>
          <Typography
            sx={{
              color: "white",
              margin: "10px 0px",
              textAlign: "center",
            }}
          >
            <button
              className="p-3 bg-main-secondary px-5 py-2 mt-2 text-sm text-black font-semibold w-full rounded-xl border border-black hover:scale-105 active:scale-95 transition duration-200"
              onClick={changeMode}
            >
              Need an account? Sign Up
            </button>
          </Typography>
          {/* </Paper> */}
        </div>
      </Grid>
    );
  }
  return (
    <Grid>
      <div className="p-20 bg-[#303461] m-56 rounded-2xl">
        <h1 className="text-5xl text-white font-bold text-center">
          Sign Up for an account
        </h1>
        <h3 className="text-lg text-white text-center my-5">
          Signing up for an account is free and easy. Fill out the form below to
          get started.
        </h3>
        <TextField
          label="Username"
          name="username"
          fullWidth
          required
          onChange={handleChange}
          placeholder="Enter your username"
          sx={{
            bgcolor: "#000732",
            input: { color: "white" },
            label: { color: "white" },
            margin: "20px 20px 20px 0px",
            borderRadius: "10px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          name="password"
          margin="30px"
          type="password"
          fullWidth
          onChange={handleChange}
          placeholder="Enter your password"
          required
          sx={{
            bgcolor: "#000732",
            input: { color: "white" },
            label: { color: "white" },
            margin: "20px 0px",
            borderRadius: "10px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          margin="30px"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          fullWidth
          required
          onChange={handleChange}
          sx={{
            bgcolor: "#000732",
            input: { color: "white" },
            label: { color: "white" },
            margin: "20px 0px",
            borderRadius: "10px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Email"
          name="email"
          fullWidth
          required
          onChange={handleChange}
          placeholder="Enter your email"
          sx={{
            bgcolor: "#000732",
            input: { color: "white" },
            label: { color: "white" },
            margin: "20px 20px 20px 0px",
            borderRadius: "10px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />

        <button
          className=" bg-main-background px-5 py-2 mt-2 text-xl text-white font-semibold w-full rounded-xl border border-white hover:scale-105 active:scale-95 transition duration-200"
          onClick={handleSignUp}
        >
          SIGNUP
        </button>
        <Typography
          sx={{
            color: "white",
            margin: "10px 0px",
            textAlign: "center",
          }}
        >
          <button
            className="p-3 bg-main-secondary px-5 py-2 mt-2 text-sm text-black font-semibold w-full rounded-xl border border-black hover:scale-105 active:scale-95 transition duration-200"
            onClick={changeMode}
          >
            Already have an account? Login
          </button>
        </Typography>
      </div>
    </Grid>
  );
};

export default Login;
