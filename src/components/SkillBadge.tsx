import Tag from "./ui/Tag";

type SkillBadgeProps = {
  skill: string;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return <Tag>{skill}</Tag>;
}

export default SkillBadge;
