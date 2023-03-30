import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postMovieDiscussion } from "../../api/api";
import { Alert } from "@mui/material";

const NewMovieDiscussion = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    author: user?.existingUser?.username,
    title: "",
    body: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submitResponse = await postMovieDiscussion(formData);

      if (submitResponse.status === 201) {
        setIsSuccess(true);
      }
    } catch (error) {
      setIsSuccess(false);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-10 bg-[#303461] m-44 mx-32 rounded-3xl justify-center items-center">
      <button
        onClick={() => navigate(-1)}
        className="p-5 mb-10 bg-main-primary rounded-2xl font-extrabold text-3xl hover:scale-105 active:scale-95 transition duration-500"
      >
        &nbsp; &larr; &nbsp; BACK &nbsp;
      </button>
      <h1 className="text-6xl font-bold mb-10">New Movie Discussion</h1>
      {isSuccess ? (
        <Alert className="my-10" severity="success">
          <h1 className="text-2xl ">
            SUCCESS! — Your post has been submitted!
          </h1>
        </Alert>
      ) : null}
      <form method="POST" className="flex flex-col w-full">
        <label
          htmlFor="author"
          className="text-lg md:text-3xl font-semibold text-left pb-2"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={user?.existingUser?.username}
          className="p-2 border-2 rounded-md bg-transparent mb-5"
          onChange={handleChange}
        />

        <label
          htmlFor="title"
          className="text-lg md:text-3xl font-semibold text-left pb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="p-2 mb-5 border-2 rounded-md bg-transparent"
          onChange={handleChange}
        />

        <label
          htmlFor="body"
          className="text-lg md:text-3xl font-semibold text-left pb-2"
        >
          Body
        </label>
        <textarea
          id="body"
          name="body"
          rows="10"
          className="p-4 mb-5 border-2 rounded-md bg-transparent"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="p-4 mt-5 hover:scale-105 active:scale-95 transition duration-200 rounded-lg bg-main-primary drop-shadow-md text-lg md:text-2xl font-semibold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewMovieDiscussion;
