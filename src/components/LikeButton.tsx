import { useLikes } from "../context/LikesContext";
import Button from "./ui/Button";

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button
      onClick={addLike}
      type="button"
      aria-label="Like this profile"
    >
      {likes > 0 ? "♥ Liked" : "♡ Like"}
    </Button>
  );
}

export default LikeButton;