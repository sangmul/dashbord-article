// src/pages/AllPosts.tsx
import { usePosts } from "../hooks/usePosts";
import Table from "../components/Table";
import { POST_STATUS } from "../constants/post";
import { Post } from "../types/post";

const AllPosts = () => {
  const { data: posts = [], isLoading, refetch } = usePosts(10, 0);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Posts</h1>
      <Table data={posts.filter(p => p.status !== POST_STATUS.THRASH)} reload={refetch} />
    </div>
  );
};

export default AllPosts;