import React from "react";

import PostCard from '../components/PostCard/PostCard'
import Suggestion from "../components/Suggestion/Suggestion";

import "./Home.css";

export default function Home() {
  return (
    <div className="container posts-container">
      <div className="card-section">
        <PostCard />
        <PostCard />
        <PostCard />

      </div>

      <div className="suggest-section">
        <Suggestion />
      </div>
    </div>
  );
}
