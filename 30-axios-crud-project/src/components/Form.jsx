import React, { useEffect } from "react";
import { useState } from "react";
import { addPost, updatePost } from "../api/PostApi";

const Form = ({ data, setData, updatedPost, setUpdatedPost }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updatedPost).length === 0; //It's return an Array --> .length works

  //   Get the Updated Data and add it into Input Field
  useEffect(() => {
    updatedPost &&
      setPost({
        title: updatedPost.title || "",
        body: updatedPost.body || "",
      });
  }, [updatedPost]);

  // Create a Function To Handle 'Add Title' & 'Body Text'
  const handleInputText = (e) => {
    // Binding of Input Fields by using their 'name="" & value={} Atrributes'
    const name = e.target.name;
    const value = e.target.value;

    // console.log("name :-", name);
    // console.log("value :- ", value);

    // To show What User Writes in that Input Fields
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //   Create a POST Data Function to Add Post's Data
  const addPostData = async () => {
    try {
      const res = await addPost(post);
      //   console.log("Res:-", res);

      //   Check whether the Both Input field is EMPTY or NOT
      if (!post.title.trim() || !post.body.trim()) {
        return alert("Write something in both input field.");
      }

      //   Display Input Title and Body Text on the UI
      if (res.status === 201) {
        setData([...data, res.data]);
        setPost({ title: "", body: "" });
      }
    } catch (err) {
      console.log(`Add Post Error :- ${err}`);
    }
  };

  //   Create a Update Data Function to Update Post's Data
  const updatePostData = async () => {
    try {
      // Send updated data to API
      const res = await updatePost(updatedPost.id, post);

      if (res.status === 200) {
        // Update the post in React state
        setData((prev) => {
          return prev.map((currElem) => {
            return currElem.id === res.data.id ? res.data : currElem;
          });
        });

        // Clear the form and reset edit mode
        setPost({ title: "", body: "" });
        setUpdatedPost({});
      }
    } catch (err) {
      console.log(`Update Post Error :- ${err}`);
    }
  };

  //   Create a Function To Handle Form Submit and Display Add POST Details on the UI
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

  return (
    <div className="">
        {/* Input Field Form */}
      <form
        onSubmit={handleFormSubmit}
        className="w-full p-2 mb-3 flex  flex-col gap-5 border border-white  rounded-xl sm:flex-row sm:items-center"
      >

        {/* Title Input Field */}
        <input
          type="text"
          name="title"
          placeholder="Add title"
          value={post.title}
          onChange={handleInputText}
          className="w-full min-w-0 border border-[#3A3A3C] bg-[#2C2C2E] rounded-md  p-1 text-white placeholder-gray-400 outline-none focus:border-blue-500 sm:flex-1"
        />

        {/* Post Input Field */}
        <input
          type="text"
          name="body"
          placeholder="Add post"
          value={post.body}
          onChange={handleInputText}
          className="w-full min-w-0 border border-[#3A3A3C] bg-[#2C2C2E] rounded-md p-1 text-white placeholder-gray-400 outline-none focus:border-blue-500 sm:flex-1"
        />

        {/* ADD & UPDATE Button using Conditional Rendering */}
        <button
          type="submit"
          value={isEmpty ? "Add" : "Edit"}
          className="w-full rounded-lg border bg-green-600 p-2 font-semibold text-white hover:bg-green-700 sm:w-20 sm:shrink-0"
        >
          {isEmpty ? "ADD" : "UPDATE"}
        </button>
      </form>
    </div>
  );
};

export default Form;
