import axios from "axios";

// Create an Axios Instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Create a Get Method
export const getPost = () => {
  return api.get("/posts");
};

// Create a Delete Method
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// Create a Post Method
export const addPost = (post) => {
    return api.post("/posts", post);
};

// Create a Put/Patch Method
export const updatePost = (id, post) => {
    return api.put(`/posts/${id}`, post);
};