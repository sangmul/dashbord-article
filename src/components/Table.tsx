// src/components/Table.tsx
import { Post } from "../types/post";
import { useNavigate } from "react-router-dom";
import { useUpdatePost } from "../hooks/usePosts";
import { POST_STATUS } from "../constants/post";

interface Props {
  data: Post[];
  reload?: () => void;
}

export default function Table({ data, reload }: Props) {
  const nav = useNavigate();
  const updatePost = useUpdatePost();

  const handleTrash = async (post: Post) => {
    console.log("handleTrash DATA", post)
    await updatePost.mutateAsync({
      id: post.id,
      post: { ...post, status: POST_STATUS.THRASH },
    });
    if (reload) reload();
  };

  return (
    <table className="w-full bg-white shadow border-collapse border">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Title</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post) => (
          <tr key={post.id} className="hover:bg-gray-50">
            <td className="border p-2">{post.title}</td>
            <td className="border p-2">{post.category}</td>
            <td className="border p-2 flex gap-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => nav(`/edit/${post.id}`)}
              >
                ✏️
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleTrash(post)}
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}