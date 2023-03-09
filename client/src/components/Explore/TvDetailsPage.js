import React, { useState } from "react";
import { useParams } from "react-router-dom";

const TvDetailsPage = () => {
  const [details, setDetails] = useState(null);

  const { id } = useParams();
  return <div>TvDetailsPage</div>;
};

export default TvDetailsPage;
