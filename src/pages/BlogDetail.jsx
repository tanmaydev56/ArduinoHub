import React from "react";
import { useParams } from "react-router-dom";

const blogData = {
  "arduino-car": { title: "Arduino Car Project", content: "Detailed article about building an Arduino-powered car..." },
  "lpg-robot": { title: "LPG Detection Robot", content: "Guide on building an LPG gas detection robot using Arduino..." },
  "obstacle-bot": { title: "Obstacle Avoidance Bot", content: "How to create an obstacle-avoiding robot with sensors..." },
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogData[slug];

  if (!blog) return <h2 className="mt-10 text-red-500 text-center">Coming Soon!</h2>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">{blog.title}</h2>
      <p className="text-gray-700 text-lg">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
