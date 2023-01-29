import { Button, HeadingText } from "components";
import React, { useState } from "react";
import AxiosInstance from "service/AxiosInstance";
import { ThemeStore } from "store/theme/colorStore";

export default function CreatePost() {
  const { isDark } = ThemeStore.useState();
  const [createPost, setCreatePost] = useState("");

  const handlePost = (e) => {
    e.preventDefault();

    AxiosInstance.post("/post", {
      message: createPost,
    })
      .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err));
  };
  return (
    <div>
      <HeadingText className="mv-2">Create Post</HeadingText>
      <form className="df" onSubmit={(e) => handlePost(e)}>
        <input className={`form-control ${isDark ? "bg-dark text-white" : "bg-light text-dark"}`} onChange={(e) => setCreatePost(e.target.value)} />
        <Button type="submit" onClick={handlePost}>
          Post
        </Button>
      </form>
    </div>
  );
}
