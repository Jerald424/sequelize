import { Store } from "pullstate";

export const initialPostsStore = {};

export const PostsStore = new Store({
  ...initialPostsStore,
});
