import { useState } from "react";
import SkillItem from "./SkillItem";

type ProfileCardProps = {
  name: string;
  email: string;
  image: string;
  skills: string[];
};

function ProfileCard({
  name,
  email,
  image,
  skills,
}: ProfileCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <main className="profile-card">
      <img src={image} alt={`Profile photo of ${name}`} />

      <h2>{name}</h2>
      <p>{email}</p>

      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "♡ Like"}
      </button>

      <h3>Skills</h3>

      {skills.length > 0 ? (
        <ul>
          {skills.map((skill) => (
            <SkillItem key={skill} skill={skill} />
          ))}
        </ul>
      ) : (
        <p>No skills added yet.</p>
      )}
    </main>
  );
}

export default ProfileCard;