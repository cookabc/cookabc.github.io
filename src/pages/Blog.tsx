import { motion } from "framer-motion";
import { formatDate } from "../lib/utils";

const Blog = () => {
  const blogPosts = [
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
  ];

  return (
    <div>
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                fontFamily: "Kalam, cursive",
                color: "#2d2d2d",
                marginBottom: "1.5rem",
              }}
            >
              Our Blog
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#2d2d2d",
                maxWidth: "48rem",
                margin: "0 auto",
                fontFamily: "Patrick Hand, cursive",
              }}
            >
              Sharing experiences, tips, and insights from game development
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div
          style={{ maxWidth: "80rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "3rem",
            }}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hand-drawn-card jiggle"
                style={{
                  backgroundColor: "white",
                  overflow: "hidden",
                  position: "relative",
                  transform: `rotate(${Math.random() * 2 - 1}deg)`,
                }}
              >
                <div className="tack"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: "100%", height: "12rem", objectFit: "cover" }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        paddingLeft: "0.75rem",
                        paddingRight: "0.75rem",
                        paddingTop: "0.25rem",
                        paddingBottom: "0.25rem",
                        backgroundColor: "#e5e0d8",
                        color: "#2d2d2d",
                        borderRadius: "9999px",
                        fontSize: "0.875rem",
                        fontFamily: "Patrick Hand, cursive",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{
                        fontSize: "0.875rem",
                        fontFamily: "Patrick Hand, cursive",
                        color: "#2d2d2d",
                      }}
                    >
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      fontFamily: "Kalam, cursive",
                      color: "#2d2d2d",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontFamily: "Patrick Hand, cursive",
                      color: "#2d2d2d",
                      marginBottom: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    style={{
                      fontFamily: "Patrick Hand, cursive",
                      fontWeight: "500",
                      color: "#ff4d4d",
                      textDecoration: "underline",
                      textDecorationStyle: "wavy",
                      textDecorationThickness: "2px",
                    }}
                  >
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
