// src/pages/EditPost.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePostById, useUpdatePost } from "../hooks/usePosts";
import { POST_STATUS } from "../constants/post";
import { Post } from "../types/post";

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post } = usePostById(Number(id));
  const updatePost = useUpdatePost();

  const [form, setForm] = useState({ title: "", content: "", category: "" });

  useEffect(() => {
    if (post) setForm({ title: post.title, content: post.content, category: post.category });
  }, [post]);

  const submit = async (status: typeof POST_STATUS[keyof typeof POST_STATUS]) => {
    if (!post) return;
    await updatePost.mutateAsync({ id: post.id, post: { ...form, status } });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Edit Post</h1>
      <div className="flex flex-col gap-2 max-w-md">
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 rounded"
        />
        <textarea
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="border p-2 rounded h-32"
        />
        <div className="flex gap-2">
          <button
            onClick={() => submit(POST_STATUS.PUBLISH)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Publish
          </button>
          <button
            onClick={() => submit(POST_STATUS.DRAFT)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPost;