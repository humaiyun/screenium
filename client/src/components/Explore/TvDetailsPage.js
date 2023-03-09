import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getTVDetails } from "../../api/api";

const TvDetailsPage = () => {
  const [details, setDetails] = useState(null);

  const { pathname } = useLocation();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await getTVDetails(id).then((res) => setDetails(res.data));
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>TvDetailsPage</h1>
      <button onClick={() => console.log(details)}>DETAILS</button>
    </div>
  );
};

export default TvDetailsPage;
