import React, { useEffect, useState } from "react";
import { getMovieDiscussions } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";

const MovieDiscussions = () => {
  const [movieDiscussions, setMovieDiscussions] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      await getMovieDiscussions().then((res) =>
        setMovieDiscussions([...res?.data?.posts])
      );
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="p-20 bg-[#303461] m-44 rounded-2xl">
        <button
          onClick={() => navigate(-1)}
          className="p-5 mb-10 bg-main-primary rounded-2xl font-extrabold text-3xl hover:scale-105 active:scale-95 transition duration-500"
        >
          &nbsp; &larr; &nbsp; BACK &nbsp;
        </button>
        <h1 className="text-3xl md:text-7xl text-center font-bold">
          Movie Discussions
        </h1>
        <Link to="/forums/movie/submission">
          <button className="bg-main-secondary w-full text-black py-5 my-10 rounded-full hover:scale-105 active:scale-95 transition duration-500">
            <h1 className="text-3xl">New Discussion</h1>
          </button>
        </Link>
        {movieDiscussions?.map((movieDiscussion) => (
          <Link
            to={`/forums/movie/${movieDiscussion._id}`}
            key={movieDiscussion?._id}
          >
            <div className="grid grid-cols-6 bg-main-background outline outline-1 rounded-md p-10 mb-5 mt-10 outline-white min-h-[100px] hover:scale-105 active:scale-95 transition duration-500">
              <div className="col-span-5">
                <h2 className="text-left text-3xl font-bold">
                  {movieDiscussion?.title}
                </h2>
                <h3 className="text-left text-lg py-3">
                  Submitted by <strong>{movieDiscussion?.author}</strong> on{" "}
                  <strong>{movieDiscussion?.submitted_date}</strong>
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieDiscussions;
