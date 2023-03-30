import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTVDiscussionById, postTVDiscussionComment } from "../../api/api";

const TVDiscussionDetails = () => {
  const [details, setDetails] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.existingUser?.username,
    comment: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      await getTVDiscussionById(id).then((res) => setDetails({ ...res?.data }));
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submitResponse = await postTVDiscussionComment(id, formData);

      if (submitResponse.status === 200) {
        setIsSuccess(true);
        return navigate(0);
      }
    } catch (error) {
      setIsSuccess(false);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
      <div className="p-20 bg-[#303461] mx-44 mb-10 rounded-2xl">
        <form method="POST" className="flex flex-col w-full">
          <input
            type="hidden"
            id="name"
            name="name"
            value={user?.existingUser?.username}
            className="p-2 border-2 rounded-md bg-transparent mb-5"
            onChange={handleChange}
          />

          <label
            htmlFor="comment"
            className="text-lg md:text-3xl font-semibold text-left pb-2"
          >
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="10"
            className="p-4 mb-5 border-2 rounded-md bg-transparent"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="p-4 mt-5 hover:scale-105 active:scale-95 transition duration-200 rounded-lg bg-main-primary drop-shadow-md text-lg md:text-2xl font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
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

export default TVDiscussionDetails;
