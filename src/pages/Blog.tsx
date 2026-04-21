import { motion } from "framer-motion";
import { formatDate } from "../lib/utils";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Challenges and Opportunities in Indie Game Development",
    excerpt:
      "As an indie game developer, we face many challenges but also have many opportunities. This article shares our experiences and insights.",
    date: "2026-04-10",
    category: "Dev Thoughts",
    image: "/images/Challenges and Opportunities in Indie Game Development.jpeg",
  },
  {
    id: 2,
    title: "How to Design a Successful Indie Game",
    excerpt:
      "Game design is key to indie game success. This article explores the core elements and best practices of game design.",
    date: "2026-03-25",
    category: "Game Design",
    image: "/images/How to Design a Successful Indie Game.jpeg",
  },
  {
    id: 3,
    title: "Unity vs Unreal Engine: How to Choose the Right Game Engine",
    excerpt:
      "Unity and Unreal Engine are the most popular game engines today. This article compares their pros and cons to help you make a choice.",
    date: "2026-03-10",
    category: "Tech Tutorial",
    image: "/images/Unity vs Unreal Engine.jpeg",
  },
  {
    id: 4,
    title: "Marketing Strategies for Indie Games",
    excerpt:
      "Even if your game is great, without good marketing strategies it's hard to succeed. This article shares marketing tips for indie games.",
    date: "2026-02-20",
    category: "Marketing",
    image: "/images/Marketing Strategies for Indie Games.jpeg",
  },
] as const;

const Blog = () => {
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-[80rem] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 font-kalam text-4xl font-bold text-foreground">Our Blog</h1>
            <p className="mx-auto max-w-3xl font-patrick text-xl text-foreground">
              Sharing experiences, tips, and insights from game development
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[80rem] px-4">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="hand-drawn-card overflow-hidden bg-white relative">
                <div className="tack" />
                <img
                  src={post.image}
                  alt={`Featured image for blog post: ${post.title}`}
                  className="h-48 w-full object-cover outline outline-1 outline-black/10"
                />
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-muted px-3 py-1 font-patrick text-sm text-foreground">
                      {post.category}
                    </span>
                    <time dateTime={post.date} className="font-patrick text-sm text-foreground">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h2 className="mb-3 font-kalam text-xl font-bold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mb-4 font-patrick leading-relaxed text-foreground">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.id}`}
                    className="font-patrick font-medium underline decoration-wavy decoration-accent decoration-2 text-accent"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
