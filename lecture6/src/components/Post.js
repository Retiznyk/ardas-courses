import React from "react";

export default ({ post }) => (
  <div>
    <h3>{post.title}</h3>
    <span>{post.body}</span>
  </div>
);
