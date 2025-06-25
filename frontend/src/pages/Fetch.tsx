import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const Page = () => {
  const [currentPost, setcurrentPost] = useState(1);
  const { post, loading, error, reFetch } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${currentPost}`
  );
  return (
    <>
      <div className="flex flex-row gap-10 text-xl">
        <button
          onClick={()   => {
            setcurrentPost(1);
          }}
          className="bg-slate-500 text-white p-2 rounded "
        >
          Post 1
        </button>
        <button
          onClick={() => {
            setcurrentPost(2);
          }}
          className="bg-slate-500 text-white p-2 rounded "
        >
          Post 2
        </button>
        <button
          onClick={() => {
            setcurrentPost(3);
          }}
          className="bg-slate-500 text-white p-2 rounded "
        >
          Post 3
        </button>
      </div>
      <div>
        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {post && (
          <div className="p-6 border rounded shadow bg-white">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        )}
      </div>
    </>
  );
};
export default Page;
