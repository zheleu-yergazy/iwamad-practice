import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import photo from "./photo.jpg";
import "./style.css";

function App() {
  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
  ];

  return (
    <>
      <Header
        name="Ergazy Zheleu"
        title="Web Development Learner"
      />

      <ProfileCard
        name="Ergazy Zheleu"
        email="y_zheleu@kbtu.kz"
        image={photo}
        skills={skills}
      />

      <Footer text="© 2026 Ergazy Zheleu" />
    </>
  );
}

export default App;