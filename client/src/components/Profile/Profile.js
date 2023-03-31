import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [userType, setUserType] = useState("user");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
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
            Please log in to view your profile
          </h1>
          <button
            onClick={() => navigate("/login")}
            className="my-16 w-full p-5 bg-main-primary rounded-3xl hover:scale-105 active:scale-95 transition duration-300"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="p-10 bg-[#303461] m-16 mx-32 rounded-3xl justify-center items-center">
          <div className="flex-row">
            <h1 className="text-6xl font-bold mb-10 text-center">
              {user?.existingUser?.username}
            </h1>
            <div>
              <img
                className="rounded-full pointer-events-none border-2 border-black mx-auto"
                src={user?.existingUser?.profile_picture}
                alt={`${user?.username}'s pfp`}
                height="200"
                width="200"
              />
            </div>
            <div className="grid grid-cols-5 gap-10">
              <div className="bg-main-background p-10 mt-8 rounded-3xl col-span-2">
                <h2 className="text-4xl mb-3 underline underline-offset-4">
                  About Me
                </h2>
                <h1 className="text-xl mb-8">
                  <strong>Member Since:</strong>{" "}
                  {new Date(
                    `${user?.existingUser?.createdAt}`
                  )?.toLocaleString()}
                </h1>
                <h1 className="text-xl mb-8">
                  <strong>Name:</strong> {user?.existingUser?.firstName} &nbsp;
                  {user?.existingUser?.lastName}
                </h1>
                <h1 className="text-xl mb-8">
                  <strong>Email:</strong> {user?.existingUser?.email}
                </h1>
                <h1 className="text-xl mb-8">
                  <strong>Gender:</strong> {user?.existingUser?.gender}
                </h1>
                <h1 className="mb-3">
                  <strong className="text-xl">Biography:</strong>
                  <span className="text-lg">
                    &nbsp;{user?.existingUser?.biography}
                  </span>
                </h1>
                <Link to="/profile/edit">
                  <button className="w-full py-3 px-5 mt-5 bg-main-primary rounded-xl hover:scale-105 active:scale-95 transition duration-300 text-3xl font-bold">
                    Edit Profile
                  </button>
                </Link>
              </div>
              <div className="bg-main-background p-10 mt-8 rounded-3xl col-span-3">
                <h2 className="text-4xl mb-3 underline underline-offset-4">
                  Watch List
                </h2>
                <div className="grid grid-cols-5 gap-3">
                  {user?.existingUser?.watchList?.map((item) => (
                    <img
                      className="pointer-events-none rounded-xl"
                      src={item?.image}
                      alt={item?.title}
                      key={item?.title}
                    />
                  ))}
                </div>
                <Link to="/profile/edit/list">
                  <button className="w-full py-3 px-5 mt-10 bg-main-primary rounded-xl hover:scale-105 active:scale-95 transition duration-300 text-3xl font-bold">
                    Edit List
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
