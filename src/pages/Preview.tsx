// src/pages/Preview.tsx
import { usePosts } from "../hooks/usePosts";
import { POST_STATUS } from "../constants/post";
import { Post } from "../types/post";

const Preview = () => {
  const { data: posts = [], isLoading } = usePosts(10, 0);

  if (isLoading) return <div>Loading...</div>;

  const publishedPosts = posts.filter((p) => p.status === POST_STATUS.PUBLISH);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Preview</h1>
      {publishedPosts.map((post: Post) => (
        <div key={post.id} className="border p-4 mb-2 rounded shadow">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-500">{post.category}</p>
          <p className="mt-2">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Preview;