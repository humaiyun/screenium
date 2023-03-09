import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getPersonDetails } from "../../api/api";

const PersonDetailsPage = () => {
  const [details, setDetails] = useState(null);

  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await getPersonDetails(id).then((res) => setDetails(res.data));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>PersonDetailsPage</h1>
      <button onClick={() => console.log(details)}>DETAILS</button>
    </div>
  );
};

export default PersonDetailsPage;
