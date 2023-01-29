import { HeadingText } from "components";
import React, { useEffect } from "react";
import AxiosInstance from "service/AxiosInstance";

export default function ViewPosts() {
  useEffect(() => {
    AxiosInstance.get(`/post/0`)
      .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <div>
      <HeadingText>Posts</HeadingText>
    </div>
  );
}
