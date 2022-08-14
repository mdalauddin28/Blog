import React from "react";
import PostBox from "./PostBox";

function Posts() {
  return (
    <>
      <div className="post-container">
        <div className="posts">
          <PostBox />
          <PostBox />
          <PostBox />
        </div>
        <div className="posts">
          <PostBox />
          <PostBox />
          <PostBox />
        </div>
      </div>
    </>
  );
}

export default Posts;
