import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: user?.existingUser?.firstName,
    lastName: user?.existingUser?.lastName,
    email: user?.existingUser?.email,
    gender: user?.existingUser?.gender,
    biography: user?.existingUser?.biography,
    profile_picture: user?.existingUser?.profile_picture,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { existingUser, token, userType } = user;

    try {
      existingUser.firstName = formData.firstName;
      existingUser.lastName = formData.lastName;
      existingUser.gender = formData.gender;
      existingUser.biography = formData.biography;
      existingUser.email = formData.email;
      existingUser.profile_picture = formData.profile_picture;

      localStorage.setItem(
        "profile",
        JSON.stringify({ token, userType, existingUser })
      );
      setIsSuccess(true);
      console.log();
    } catch (error) {
      setIsSuccess(false);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e?.target?.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, profile_picture: reader.result });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="p-10 bg-[#303461] m-44 mx-32 rounded-3xl justify-center items-center">
      <button
        onClick={() => navigate(-1)}
        className="p-5 mb-10 bg-main-primary rounded-2xl font-extrabold text-3xl hover:scale-105 active:scale-95 transition duration-500"
      >
        &nbsp; &larr; &nbsp; BACK &nbsp;
      </button>
      <h1 className="text-6xl font-bold mb-10">Edit Profile</h1>
      {isSuccess ? (
        <Alert className="my-10" severity="success">
          <h1 className="text-2xl ">
            SUCCESS! — Your profile has been updated!
          </h1>
        </Alert>
      ) : null}
      <form method="POST" className="flex flex-col w-full">
        <label
          htmlFor="firstName"
          className="text-lg md:text-3xl font-semibold text-left pb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData?.firstName}
          className="p-2 border-2 rounded-md bg-transparent mb-5"
          onChange={handleChange}
        />

        <label
          htmlFor="lastName"
          className="text-lg md:text-3xl font-semibold text-left pb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData?.lastName}
          className="p-2 mb-5 border-2 rounded-md bg-transparent"
          onChange={handleChange}
        />

        <label
          htmlFor="lasemailtName"
          className="text-lg md:text-3xl font-semibold text-left pb-2"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData?.email}
          className="p-2 mb-5 border-2 rounded-md bg-transparent"
          onChange={handleChange}
        />

        <label
          htmlFor="gender"
          className="text-lg md:text-3xl font-semibold text-left pb-2"
        >
          Gender
        </label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={formData?.gender}
          className="p-2 mb-5 border-2 rounded-md bg-transparent"
          onChange={handleChange}
        />

        <label
          htmlFor="biography"
          className="text-lg md:text-3xl font-semibold text-left pb-2"
        >
          Biography
        </label>
        <textarea
          id="biography"
          name="biography"
          value={formData?.biography}
          rows="10"
          className="p-4 mb-5 border-2 rounded-md bg-transparent"
          onChange={handleChange}
        />

        <label
          htmlFor="profile_picture"
          className="text-lg md:text-3xl font-semibold text-left pb-2"
        >
          Profile Picture
        </label>
        <input
          type="file"
          id="profile_picture"
          name="profile_picture"
          accept="image/png, image/jpeg, image/jpg"
          className="p-2 mb-5 border-2 rounded-md bg-transparent"
          onChange={handleFileChange}
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

export default EditProfile;
