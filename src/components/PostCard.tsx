import Card from "./ui/Card";
import Tag from "./ui/Tag";
import Button from "./ui/Button";

type PostCardProps = {
  title: string;
  date: string;
  tags: string[];
  image?: string;
};

function PostCard({ title, date, tags, image }: PostCardProps) {
  return (
    <Card className="post-card">
      {image ? (
        <img
          className="post-image"
          src={image}
          alt={title}
        />
      ) : (
        <div className="post-image" aria-hidden="true" />
      )}

      <h2 className="post-title">{title}</h2>
      <p className="post-date">{date}</p>

      <div className="post-tags">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <Button
        variant="secondary"
        onClick={() => window.alert(title)}
        type="button"
      >
        Read more
      </Button>
    </Card>
  );
}

export default PostCard;