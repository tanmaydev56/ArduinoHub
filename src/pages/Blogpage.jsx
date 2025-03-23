import React from "react";
import { Link } from "react-router-dom";

const articles = [
  { id: 1, title: "Arduino Car Project", slug: "arduino-car" },
  { id: 2, title: "LPG Detection Robot", slug: "lpg-robot" },
  { id: 3, title: "Obstacle Avoidance Bot", slug: "obstacle-bot" },
];

const Articles = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">📖 Arduino Articles</h2>
      <ul className="space-y-3">
        {articles.map((article) => (
          <li key={article.id} className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
            <Link to={`/articles/${article.slug}`} className="text-lg font-semibold text-blue-700">
              {article.title} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
