import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getPostsAPI,
  getPostByIdAPI,
  createPostAPI,
  updatePostAPI,
  deletePostAPI,
} from "../services/api";
import { Post, PostForm } from "../types/post";

// =======================
// GET ALL POSTS
// =======================
export const usePosts = (limit: number, offset: number) => {
  return useQuery<Post[]>({
    queryKey: ["posts", limit, offset],
    queryFn: () => getPostsAPI(limit, offset),
  });
};

// =======================
// GET POST BY ID
// =======================
export const usePostById = (id: number) => {
  return useQuery<Post>({
    queryKey: ["post", id],
    queryFn: () => getPostByIdAPI(id),
    enabled: !!id, // supaya tidak jalan kalau id undefined
  });
};

// =======================
// CREATE POST
// =======================

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: PostForm) => createPostAPI(post), // ✅ pakai PostForm

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

// =======================
// UPDATE POST
// =======================

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // ✅ ubah dari Post → PostForm
    mutationFn: ({ id, post }: { id: number; post: PostForm }) =>
      updatePostAPI(id, post),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

// =======================
// DELETE POST
// =======================
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deletePostAPI(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};