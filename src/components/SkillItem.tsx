type SkillItemProps = {
  skill: string;
};

function SkillItem({ skill }: SkillItemProps) {
  return <li>{skill}</li>;
}

export default SkillItem;