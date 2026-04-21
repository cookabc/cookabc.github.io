import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogPostById } from "../data/blog";
import { formatDate } from "../lib/utils";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPostById(Number(id));

  if (!post) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-[80rem] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 font-kalam text-6xl font-bold text-accent">404</h1>
            <p className="mb-2 font-patrick text-2xl text-foreground">Post Not Found</p>
            <p className="mb-8 font-patrick text-lg text-muted">
              This blog post seems to have wandered off...
            </p>
            <Link
              to="/blog"
              className="hand-drawn-button inline-block bg-white px-8 py-3 font-patrick text-lg no-underline text-foreground"
            >
              ← Back to Blog
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <article>
      <section className="py-16">
        <div className="mx-auto max-w-[80rem] px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-muted px-4 py-1.5 font-patrick text-sm text-foreground">
                {post.category}
              </span>
              <time dateTime={post.date} className="font-patrick text-sm text-muted">
                {formatDate(post.date)}
              </time>
            </div>
            <h1 className="mb-6 font-kalam text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img
              src={post.image}
              alt={`Featured image for: ${post.title}`}
              className="mb-12 h-auto w-full rounded-wobbly-md border-2 border-border outline outline-1 outline-black/10 sm:h-[28rem] sm:object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-3xl"
          >
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 font-patrick text-lg leading-relaxed text-foreground last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-16 text-center"
          >
            <div className="hand-drawn-card inline-block bg-white p-8">
              <Link
                to="/blog"
                className="font-patrick text-lg font-medium underline decoration-wavy decoration-accent decoration-2 text-accent no-underline"
              >
                ← Back to All Posts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};

export default BlogPost;
