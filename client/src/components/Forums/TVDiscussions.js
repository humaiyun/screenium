import React, { useEffect, useState } from "react";
import { getTVDiscussions } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";

const TVDiscussions = () => {
  const [tvDiscussions, setTVDiscussions] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      await getTVDiscussions().then((res) =>
        setTVDiscussions([...res?.data?.posts])
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
          TV Discussions
        </h1>
        <button className="bg-main-secondary w-full text-black py-5 my-10 rounded-full hover:scale-105 active:scale-95 transition duration-500">
          <h1 className="text-3xl">New Discussion</h1>
        </button>
        {tvDiscussions?.map((tvDiscussion) => (
          <Link to={`/forums/tv/${tvDiscussion._id}`} key={tvDiscussion?._id}>
            <div className="grid grid-cols-6 bg-main-background outline outline-1 rounded-md p-10 mb-5 mt-10 outline-white min-h-[100px] hover:scale-105 active:scale-95 transition duration-500">
              <div className="col-span-5">
                <h2 className="text-left text-3xl font-bold">
                  {tvDiscussion?.title}
                </h2>
                <h3 className="text-left text-lg py-3">
                  Submitted by <strong>{tvDiscussion?.author}</strong> on{" "}
                  <strong>{tvDiscussion?.submitted_date}</strong>
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TVDiscussions;
