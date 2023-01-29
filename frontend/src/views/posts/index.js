import React from "react";
import CreatePost from "./CreatePost";
import ViewPosts from "./ViewPosts";

export default function Index() {
  return (
    <div className="d2m1">
      <div className="f1">
        <ViewPosts />
      </div>
      <div className="f1">
        <CreatePost />
      </div>
    </div>
  );
}
