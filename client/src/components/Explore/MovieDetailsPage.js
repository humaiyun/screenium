import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../api/api";

const MovieDetailsPage = () => {
  const [details, setDetails] = useState(null);

  const { pathname } = useLocation();
  const { id } = useParams();

  const navigate = useNavigate();

  const imagePath = `${process.env.REACT_APP_TMDB_IMAGE_PATH}`;

  useEffect(() => {
    const fetchData = async () => {
      await getMovieDetails(id).then((res) => setDetails(res.data));
    };

    fetchData();
  }, []);

  const budgetFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="mb-52">
      <div>
        <img
          className="opacity-70 pointer-events-none"
          src={`${imagePath}/original${details?.backdrop_path}`}
          alt={details?.original_title}
          loading="lazy"
        />
      </div>
      <button
        onClick={() => navigate(-1)}
        className="p-5 bg-main-primary rounded-2xl font-extrabold text-3xl hover:scale-105 active:scale-95 ml-10 my-8 transition duration-500"
      >
        &nbsp; &larr; &nbsp; BACK &nbsp;
      </button>
      <h1 className="text-6xl font-bold text-center py-2">
        {details?.original_title}
      </h1>
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
              alt={details?.original_title}
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Release Date</h1>
            <h3 className="text-xl">{details?.release_date}</h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Original Laguage</h1>
            <h3 className="text-xl">{details?.original_language}</h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Budget</h1>
            <h3 className="text-xl">
              {budgetFormatter.format(details?.budget)} USD
            </h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Revenue</h1>
            <h3 className="text-xl">
              {budgetFormatter.format(details?.revenue)} USD
            </h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Runtime</h1>
            <h3 className="text-xl">{details?.runtime} minutes</h3>
          </div>
          <div className="grid-flow-row">
            <h1 className="text-3xl font-bold">Rating</h1>
            <h3 className="text-xl">
              ⭐ &nbsp; {details?.vote_average?.toFixed(1)}
            </h3>
          </div>
        </div>
        <button onClick={() => console.log(details)}>DETAILS</button>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
