import { CircularProgress } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostCard from "../components/PostCard/PostCard";
import Suggestion from "../components/Suggestion/Suggestion";
import { useFetch, useInfiniteScroll, useLazyLoading } from "../customHooks";
import { getPosts } from "../slices/postSlice";

import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const page = useSelector((state) => state.post.page);
  const fetched = useSelector((state) => state.post.fetched);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const filteredPosts = useSelector((state) => state.post.filteredPosts);
  const loading = useSelector((state) => state.post.loading);

  // useEffect(() => {
  //   dispatch(getPosts(1));
  //   // setTimeout(dispatch(getPosts()), 1000);
  // }, []);

  let bottomBoundaryRef = useRef(null);
  useFetch(page, dispatch);
  useLazyLoading(".card-img-top", posts);
  useInfiniteScroll(bottomBoundaryRef, dispatch);

  const suggest_locations = posts
    .map((post) => post.location)
    .reduce(function (acc, curr) {
      if (!acc.includes(curr)) acc.push(curr);
      return acc;
    }, []
  );

  return (
    <div className="container posts-container">
      <div className="card-section">
        {filteredPosts
          ? filteredPosts.map((post) => <PostCard post={post} key={post._id} />)
          : posts.map((post) => (
              <PostCard className="card-image-top" post={post} key={post._id} />
            ))}

        {!fetched && <CircularProgress />}
        <div id="page-bottom-boundary" ref={bottomBoundaryRef}></div>
      </div>

      <div className="suggest-section">
        <Suggestion locationOptions={suggest_locations} />
      </div>
    </div>
  );
}
