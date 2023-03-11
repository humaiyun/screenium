import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getPersonDetails } from "../../api/api";

const PersonDetailsPage = () => {
  const [details, setDetails] = useState(null);

  const { pathname } = useLocation();
  const { id } = useParams();

  const navigate = useNavigate();

  const imagePath = `${process.env.REACT_APP_TMDB_IMAGE_PATH}`;

  useEffect(() => {
    const fetchData = async () => {
      await getPersonDetails(id).then((res) => setDetails(res.data));
    };

    fetchData();
  }, []);

  return (
    <div className="mb-52">
      <button
        onClick={() => navigate(-1)}
        className="p-5 bg-main-primary rounded-2xl font-extrabold text-3xl hover:scale-105 active:scale-95 ml-10 my-8 transition duration-500"
      >
        &nbsp; &larr; &nbsp; BACK &nbsp;
      </button>
      <div className="place-items-center">
        <img
          className="opacity-70 pointer-events-none max-h-[400px] rounded-xl border-white border ml-48"
          src={`${imagePath}/original${details?.profile_path}`}
          alt={details?.name}
          loading="lazy"
        />
      </div>
      <div className="">
        <h1 className="text-6xl font-bold text-center py-2">{details?.name}</h1>
        <h4 className="text-2xl font-medium text-center py-2 mb-10">
          {details?.biography}
        </h4>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Birthday</h1>
            <h3 className="text-xl">{details?.birthday}</h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Known For</h1>
            <h3 className="text-xl">{details?.known_for_department}</h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Place of Birth</h1>
            <h3 className="text-xl">{details?.place_of_birth}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetailsPage;
