import Post from "./Post";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";

const posts = [
  {
    id: "123",
    username: "emori",
    userImg: "emori.jpeg",
    img: "emori.jpeg",
    caption: "This is dupe",
  },
  {
    id: "123",
    username: "emori",
    userImg: "emori.jpeg",
    img: "emori.jpeg",
    caption: "This is dupe",
  },
  {
    id: "123",
    username: "emori",
    userImg: "emori.jpeg",
    img: "emori.jpeg",
    caption: "This is dupe",
  },
];

function Posts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPost(snapshot.docs);
      }
    );
  }, [db]);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
