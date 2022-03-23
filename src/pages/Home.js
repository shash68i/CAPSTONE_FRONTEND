import React from "react";

import PostCard from '../components/PostCard/PostCard'

import "./Home.css";

export default function Home() {
  return (
    <div className="container posts-container">
      <div className="card-section">
        <PostCard />
      </div>

      <div className="suggest-section">Suggest</div>
    </div>
  );
}
