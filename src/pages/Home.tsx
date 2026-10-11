import PostCard from "../components/PostCard";

const posts = [
  {
    title: "Getting Started with React Router",
    date: "2 October 2026",
    tags: ["React", "TypeScript"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  },
  {
    title: "Learning React",
    date: "1 October 2026",
    tags: ["React"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800",
  },
  {
    title: "My Development Journey",
    date: "30 September 2026",
    tags: ["React"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
];

function Home() {
  return (
    <main className="blog-home">
      <h1>Posts</h1>

      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </div>
    </main>
  );
}

export default Home;