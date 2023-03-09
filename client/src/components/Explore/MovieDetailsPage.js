import React, { useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const [details, setDetails] = useState(null);

  const { id } = useParams();
  return <div>MovieDetailsPage</div>;
};

export default MovieDetailsPage;
