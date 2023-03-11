import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getTVDetails } from "../../api/api";

const TvDetailsPage = () => {
  const [details, setDetails] = useState(null);

  const { pathname } = useLocation();
  const { id } = useParams();

  const navigate = useNavigate();

  const imagePath = `${process.env.REACT_APP_TMDB_IMAGE_PATH}`;

  useEffect(() => {
    const fetchData = async () => {
      await getTVDetails(id).then((res) => setDetails(res.data));
    };

    fetchData();
  }, []);

  return (
    <div className="mb-52">
      <div>
        <img
          className="opacity-70 pointer-events-none"
          src={`${imagePath}/original${details?.backdrop_path}`}
          alt={details?.name}
          loading="lazy"
        />
      </div>
      <button
        onClick={() => navigate(-1)}
        className="p-5 bg-main-primary rounded-2xl font-extrabold text-3xl hover:scale-105 active:scale-95 ml-10 my-8 transition duration-500"
      >
        &nbsp; &larr; &nbsp; BACK &nbsp;
      </button>
      <h1 className="text-6xl font-bold text-center py-2">{details?.name}</h1>
      <h3 className="text-3xl font-light italic text-center py-2">
        {details?.tagline}
      </h3>
      <h4 className="text-2xl font-medium text-center py-2 mb-10">
        {details?.overview}
      </h4>
      <div className="grid grid-cols-2 gap-2">
        <div class="grid grid-cols-1 justify-items-center">
          <div>
            <img
              className="pointer-events-none rounded-xl border border-white"
              src={`${imagePath}/w400${details?.poster_path}`}
              alt={details?.name}
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">First Air Date</h1>
            <h3 className="text-xl">{details?.first_air_date}</h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Original Laguage</h1>
            <h3 className="text-xl">{details?.original_language}</h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Last Air Date</h1>
            <h3 className="text-xl">{details?.last_air_date}</h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Status</h1>
            <h3 className="text-xl">{details?.status}</h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">No. of Episodes</h1>
            <h3 className="text-xl">{details?.number_of_episodes} Episodes</h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Rating</h1>
            <h3 className="text-xl">
              ⭐ &nbsp; {details?.vote_average?.toFixed(1)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvDetailsPage;
