import Card from "../components/ui/Card";
import SkillBadge from "../components/SkillBadge";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Libraries & Frameworks",
    skills: ["React"],
  },
  {
    title: "Languages & Tools",
    skills: ["TypeScript", "Git", "GitHub"],
  },
];

function Skills() {
  return (
    <main className="page-container">
      <section className="skills-page">
        <h1>My Skills</h1>
        <p className="page-description">
          Technologies and tools I use to build web applications.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <Card key={group.title} className="skill-card">
              <h2>{group.title}</h2>

              <div className="skill-badges">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Skills;