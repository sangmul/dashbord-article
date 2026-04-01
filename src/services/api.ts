import axios from "axios";
import { Post, PostForm } from "../types/post";

export const BASE_URL = "https://service-article-production.up.railway.app";

// GET all posts with pagination
export const getPostsAPI = async (limit: number, offset: number): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>(`${BASE_URL}/article`, {
    params: { limit, offset },
  });
  console.log("POST DATA:", data);
  return data;
};

// GET single post by ID
export const getPostByIdAPI = async (id: number): Promise<Post> => {
  const { data } = await axios.get<Post>(`${BASE_URL}/article/${id}`);
  console.log("POST DATA:", data);
  return data;
};

// CREATE post
export const createPostAPI = async (post: PostForm): Promise<Post> => {
  const { data } = await axios.post<Post>(`${BASE_URL}/article`, post);
  console.log("POST DATA:", data);
  return data;
};

// UPDATE post
export const updatePostAPI = async (
  id: number,
  post: PostForm
): Promise<Post> => {
    console.log("POST ID:", id);
  const { data } = await axios.put<Post>(`${BASE_URL}/article/${id}`, post);
  console.log("POST DATA:", data);
  return data;
};

// DELETE post
export const deletePostAPI = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/article/${id}`);
};
