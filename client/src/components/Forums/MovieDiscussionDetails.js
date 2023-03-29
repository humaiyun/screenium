import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDiscussionById } from "../../api/api";

const MovieDiscussionDetails = () => {
  const [details, setDetails] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      await getMovieDiscussionById(id).then((res) =>
        setDetails({ ...res?.data })
      );
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="p-20 bg-[#303461] mx-44 mt-44 mb-10 rounded-2xl">
        <button
          onClick={() => navigate(-1)}
          className="p-5 mb-10 bg-main-primary rounded-2xl font-extrabold text-3xl hover:scale-105 active:scale-95 transition duration-500"
        >
          &nbsp; &larr; &nbsp; BACK &nbsp;
        </button>
        <h1 className="text-6xl font-bold mb-3">{details?.title}</h1>
        <h1 className="text-2xl mb-10">
          Submitted <strong>{details?.submitted_date}</strong> by{" "}
          <strong>{details?.author}</strong>
        </h1>
        <h2 className="text-xl">{details?.body}</h2>
        <div className="bg-main-background p-5 rounded-lg border border-1 border-white my-10">
          {details?.comments?.length} comment(s)
        </div>
      </div>
      <div className="mb-44">
        <h1 className="text-6xl text-center font-bold mb-3">Comments</h1>
        {details?.comments?.map((comment) => (
          <div
            key={comment?._id}
            className="bg-[#303461] rounded-md p-4 mb-5 mt-10 min-h-[100px] mx-44"
          >
            <div className="">
              <h2 className="text-left text-3xl">
                <strong>{comment?.name}</strong> on{" "}
                <strong>{comment?.comment_date}</strong>
              </h2>
              <p className="py-3 text-xl">{comment?.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDiscussionDetails;
