import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditList = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { existingUser, token, userType } = user;

    try {
      //   localStorage.setItem(
      //     "profile",
      //     JSON.stringify({ token, userType, existingUser })
      //   );

      setIsSuccess(true);
    } catch (error) {
      setIsSuccess(false);
      console.log(error);
    }
  };

  const handleDelete = (title) => {
    const { existingUser, token, userType } = user;

    existingUser.watchList = existingUser?.watchList?.filter(
      (item) => item?.title !== title
    );

    localStorage.setItem(
      "profile",
      JSON.stringify({ token, userType, existingUser })
    );

    navigate(0);
  };

  return (
    <div className="p-10 bg-[#303461] m-44 mx-32 rounded-3xl justify-center items-center">
      <button
        onClick={() => navigate(-1)}
        className="p-5 mb-10 bg-main-primary rounded-2xl font-extrabold text-3xl hover:scale-105 active:scale-95 transition duration-500"
      >
        &nbsp; &larr; &nbsp; BACK &nbsp;
      </button>
      <h1 className="text-6xl font-bold mb-10">Edit List</h1>
      {isSuccess ? (
        <Alert className="my-10" severity="success">
          <h1 className="text-2xl ">SUCCESS! — Your list has been updated!</h1>
        </Alert>
      ) : null}
      <div className="grid grid-cols-5 gap-3">
        {user?.existingUser?.watchList?.map((item, i) => (
          <div className="relative" key={item?.title}>
            <div
              onClick={() => handleDelete(item?.title)}
              className="bg-red-400 max-h-[25px] max-w-[25px] absolute -inset-1 rounded-full drop-shadow-md cursor-pointer hover:scale-105 active:scale-95 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
            <img
              className="pointer-events-none rounded-xl"
              src={item?.image}
              alt={item?.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditList;
