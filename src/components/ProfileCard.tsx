import LikeButton from "./LikeButton";

type ProfileCardProps = {
  name: string;
  image: string;
};

function ProfileCard({ name, image }: ProfileCardProps) {
  return (
    <section className="profile-card">
      <img src={image} alt={`Profile photo of ${name}`} />

      <h2>{name}</h2>

      <LikeButton />
    </section>
  );
}

export default ProfileCard;