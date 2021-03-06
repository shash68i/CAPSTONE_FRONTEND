import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as Yup from "yup";
import { getPost, updateLikes } from "../../../core/slices/postSlice";

import { locationsGroup } from "../../../location";

const stateUtils = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const post = useSelector((state) => state.post.post);
  const loading = useSelector((state) => state.post.loading);
  const loggedInUser = useSelector((state) => state.auth.user);

  const [postData, setPostData] = useState(post || []);

  
  const [isLiked, setIsLiked] = useState(
    postData?.likes?.some((like) => loggedInUser?._id === like?.user)
    );
    const [likesCount, setLikesCount] = useState(postData?.likes?.length);
    
    console.log(likesCount, "likes");
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    setPostData(post);
  }, [post])

  const getNearbyLocations = () => {
    if (post?._id) {
      return locationsGroup
        .find((locationGroup) => locationGroup.includes(post?.location))
        ?.filter((location) => location !== post?.location);
    }

  };

  const handleUpdateLikes = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setIsLiked(true);
      setLikesCount(likesCount + 1);
    }
    dispatch(updateLikes(post?._id));
  };

  return {
    id,
    isLiked,
    likesCount,
    post,
    loading,
    loggedInUser,
    getNearbyLocations,
    handleUpdateLikes,
  };
};

export default stateUtils;
