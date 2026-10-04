import ProfileCard from "../components/ProfileCard";
import photo from "../photo.jpg";

function Home() {
  return (
    <ProfileCard
      name="Ergazy Zheleu"
      image={photo}
    />
  );
}

export default Home;