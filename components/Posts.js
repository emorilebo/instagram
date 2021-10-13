import Post from "./Post";

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
