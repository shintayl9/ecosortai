import React from "react";
import { useLocation } from "react-router-dom";

function Article() {
  const location = useLocation();

  const data = location.state;

  if (!data) {
    return <p>Artikel tidak ditemukan</p>;
  }

  return (
    <div className="article-container">

      <h1>{data.title}</h1>

      <img src={data.image} alt="article" />

      <p>{data.content}</p>

    </div>
  );
}

export default Article;