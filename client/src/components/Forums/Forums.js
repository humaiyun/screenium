import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Forums = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [userType, setUserType] = useState("user");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setUserType(user?.userType);
    if (user && user?.token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div>
      {!isLoggedIn ? (
        <div className="bg-[#303461] p-16 my-80 rounded-3xl">
          <h1 className="text-center text-5xl font-bold">
            Please log in to view the forums
          </h1>
          <button
            onClick={() => navigate("/login")}
            className="my-16 w-full p-5 bg-main-primary rounded-3xl hover:scale-105 active:scale-95 transition duration-300"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="p-10 bg-[#303461] m-44 mx-32 rounded-3xl justify-center items-center">
          <div className="grid grid-cols-2 gap-10">
            <Link to="/forums/movie">
              <div className="bg-main-background p-10 rounded-lg border border-1 border-white hover:scale-105 active:scale-100 transition duration-300 text-center cursor-pointer min-h-[300px]">
                <h1 className="text-6xl">Movie Discussions</h1>
                <img
                  src="https://i.imgur.com/H4Az6Xz.png"
                  alt="movie"
                  className="pointer-events-none py-10"
                  height="50"
                />
              </div>
            </Link>
            <Link to="/forums/tv">
              <div className="bg-main-background p-10 rounded-lg border border-1 border-white hover:scale-105 active:scale-100 transition duration-300 text-center cursor-pointer min-h-[300px]">
                <h1 className="text-6xl">TV Show Discussions</h1>
                <img
                  src="https://i.imgur.com/lmd10On.png"
                  alt="tv"
                  className="pointer-events-none py-10"
                  height="50"
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forums;
