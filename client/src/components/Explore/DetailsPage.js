import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsByID } from "../../api/api";

const DetailsPage = () => {
  const [details, setDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      await getDetailsByID(id).then((res) => console.log(res));
    };

    fetchDetails();
  }, []);

  return <div>DetailsPage</div>;
};

export default DetailsPage;
