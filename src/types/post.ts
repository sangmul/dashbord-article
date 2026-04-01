import { POST_STATUS } from "../constants/post";

// ✅ type status
export type PostStatus = typeof POST_STATUS[keyof typeof POST_STATUS];

// ✅ response dari API (ADA id)
export interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  status: PostStatus;
}

// ✅ request ke API (TIDAK ADA id)
export interface PostForm {
  title: string;
  content: string;
  category: string;
  status: PostStatus;
}