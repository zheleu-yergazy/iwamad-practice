import Card from "./ui/Card";
import LikeButton from "./LikeButton";

type ProfileCardProps = {
  name: string;
  image: string;
};

function ProfileCard({ name, image }: ProfileCardProps) {
  return (
    <Card className="profile-card">
      <img src={image} alt={`Profile photo of ${name}`} />
      <h2>{name}</h2>
      <p className="profile-description">Web Development Learner</p>
      <LikeButton />
    </Card>
  );
}

export default ProfileCard;
