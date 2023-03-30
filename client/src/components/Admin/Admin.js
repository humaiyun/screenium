import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/api";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState(null);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [userType, setUserType] = useState("user");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setUserType(user?.userType);
    if (user && user?.token) {
      setIsLoggedIn(true);
    }
    const fetchData = async () => {
      await getUsers().then((res) => setUsers([...res?.data]));
    };

    fetchData();
  }, []);

  const handleBan = async (e) => {
    e.preventDefault();
    setSuccessMessage("User has been banned");
    setIsSuccess(true);
  };

  return (
    <div>
      {isLoggedIn && userType === "admin" ? (
        <div className="p-20 bg-[#303461] m-44 rounded-2xl">
          <h1 className="text-3xl md:text-6xl">Users</h1>
          <div>
            {isSuccess ? (
              <Alert className="my-10" severity="success">
                <h1 className="text-2xl ">SUCCESS! — {successMessage}</h1>
              </Alert>
            ) : null}
            {users?.map((user) => (
              <div className="grid grid-cols-6 bg-main-background outline outline-1 rounded-md p-4 mb-5 mt-10 outline-white min-h-[100px]">
                <div>
                  <img
                    className="rounded-full pointer-events-none"
                    src={`${user?.profile_picture}`}
                    alt={`${user?.username}'s avatar`}
                    height="50"
                    width="50"
                  />
                </div>
                <div className="col-span-2">
                  <h2 className="text-left text-lg">
                    {user?.firstName} {user?.lastName} ({user?.username})
                  </h2>
                </div>
                <div></div>
                <div></div>
                <div>
                  <button
                    className="bg-red-400 px-4 py-2 rounded-lg hover:scale-105 active:scale-100 transition duration-300"
                    onClick={handleBan}
                  >
                    <h1 className="bold text-xl">BAN</h1>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-[#303461] p-16 my-80 rounded-3xl">
          <h1 className="text-center text-5xl font-bold">404 - Not Found</h1>
          <button
            onClick={() => navigate("/Explore")}
            className="my-16 w-full p-5 bg-main-primary rounded-3xl hover:scale-105 active:scale-95 transition duration-300"
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
