import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import Form from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});

  // Create a Function to getPost's Data
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  // Call the getPostData's Function inside the useEffect
  useEffect(() => {
    getPostData();
  }, []);

  //   Create a Function to Handle Post's Delete
  const handlePostDelete = async (id) => {
    try {
      const res = await deletePost(id);
      console.log(res);

      if (res.status === 200) {
        const newUpdatedPosts = data.filter((currPost) => {
          return currPost.id !== id;
        });

        setData(newUpdatedPosts);
      } else {
        console.log(`Failed to delete post :- ${res.status}`);
      }
    } catch (err) {
      console.log(`Error to delete post :- ${err}`);
    }
  };

  //   Create a Function to Handle Post's Edit
  const handlePostEdit = (elem) => {
    setUpdatedPost(elem);
  };

  return (
    <>
      {/* IMPORT <Form /> Component  and Passed Data as Props*/}
      <Form
        data={data}
        setData={setData}
        updatedPost={updatedPost}
        setUpdatedPost={setUpdatedPost}
      />

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((elem, index) => {
          return (
            <li
              key={elem.id}
              className="h-auto w-full flex flex-col rounded-xl border border-[#3A3A3C] bg-[#2C2C2E] p-4"
            >
              {/* Serial Number of Post */}
              <h6 className="w-6 h-6 p-4 flex justify-center items-center font-extrabold text-lg border-2 border-[#3A3A3C] rounded-full text-white">
                {index + 1}
              </h6>

              {/* Post's Title */}
              <h1 className="text-lg font-bold text-white">
                Title :- {elem.title.toUpperCase()}
              </h1>

              {/* Post's Body */}
              <p className="text-md font-semibold text-white">
                <span className="text-lg font-bold text-white">Body :-</span>{" "}
                {elem.body[0].toUpperCase() + elem.body.slice(1)}
              </p>

              {/* Button Container */}
              <div className="mt-auto flex justify-center gap-4 pt-4">
                {/* EDIT BUTTON */}
                <button
                  className="w-20 rounded-lg text-md text-white font-semibold border p-2 cursor-pointer bg-green-600 hover:bg-green-700"
                  onClick={() => handlePostEdit(elem)}
                >
                  EDIT
                </button>

                {/* DELETE BUTTON */}
                <button
                  className="w-20 rounded-lg text-md text-white font-semibold border p-2 cursor-pointer bg-red-600 hover:bg-red-800"
                  onClick={() => handlePostDelete(elem.id)}
                >
                  DELETE
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Posts;
