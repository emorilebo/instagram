import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img }) {
  return (
    <div>
      {/* Header */}
      <div className="flex">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p>{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* Img */}
      {/* Buttons */}
      {/* Caption */}
      {/* Comment */}
      {/* Input box */}
    </div>
  );
}

export default Post;
