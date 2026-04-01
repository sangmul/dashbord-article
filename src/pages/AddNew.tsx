// src/pages/AddNew.tsx
import { useState } from "react";
import { useCreatePost } from "../hooks/usePosts";
import { POST_STATUS } from "../constants/post";
import { PostStatus } from "../types/post";

const AddNew = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
  });

  const createPost = useCreatePost();

//   const submit = async (status: typeof POST_STATUS[keyof typeof POST_STATUS]) => {
//     await createPost.mutateAsync({ ...form, status });
//     setForm({ title: "", content: "", category: "" });
//   };

//   const submit = async (status: typeof POST_STATUS[keyof typeof POST_STATUS]) => {
//     await createPost.mutateAsync({ ...form, status });
//   };

    const submit = async (status: PostStatus) => {
    await createPost.mutateAsync({ ...form, status }); // ✅ sekarang valid
    };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Add New Post</h1>
      <div className="flex flex-col gap-2 max-w-md">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Content"
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

export default AddNew;