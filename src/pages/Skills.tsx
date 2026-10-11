import SkillBadge from "../components/SkillBadge";

const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript"];

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}><SkillBadge skill={skill} /></li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
