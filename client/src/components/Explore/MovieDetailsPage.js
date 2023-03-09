import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../api/api";

const MovieDetailsPage = () => {
  const [details, setDetails] = useState(null);

  const { pathname } = useLocation();
  const { id } = useParams();

  //console.log(pathname.slice(9, 14));

  useEffect(() => {
    const fetchData = async () => {
      await getMovieDetails(id).then((res) => setDetails(res.data));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movie Details</h1>
      <button onClick={() => console.log(details)}>DETAILS</button>
    </div>
  );
};

export default MovieDetailsPage;
