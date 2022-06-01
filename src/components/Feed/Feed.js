import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Tweetpost from "../Tweetpost/Tweetpost";
import "./Feed.css";
// import db from "./firebase";

const Feed = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);
  return (
    <div className="feed">
      {/* Header  */}
      <div className="feed-header">
        <h2>Home</h2>

        {/* <StarBorderIcon className="star" /> */}
      </div>
      {/* Tweet input Box  */}
      <Tweetpost />
      {/* post */}
      {/* {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))} */}
      <a
        class="twitter-timeline"
        href="https://twitter.com/K_K_Pal?ref_src=twsrc%5Etfw"
      >
        A tribute to K_K_Pal
      </a>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  );
};

export default Feed;
