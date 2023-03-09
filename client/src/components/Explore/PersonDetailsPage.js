import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PersonDetailsPage = () => {
  const [details, setDetails] = useState(null);

  const { id } = useParams();
  return <div>PersonDetailsPage</div>;
};

export default PersonDetailsPage;
