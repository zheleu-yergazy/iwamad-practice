import { useLikes } from "../context/LikesContext";

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button onClick={addLike}>
      {likes > 0 ? "♥ Liked" : "♡ Like"}
    </button>
  );
}

export default LikeButton;