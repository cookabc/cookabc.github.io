import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Joy Adventure",
      description:
        "An imaginative platform adventure game where players explore a colorful world, solve puzzles, collect items, and battle enemies. Featuring beautiful 2D graphics and smooth animations, it offers an immersive gaming experience.",
      image: "/images/Joy Adventure.jpeg",
      technologies: ["Unity", "C#", "2D Art", "Pixel Art"],
      releaseDate: "2024-06-15",
      link: "#",
    },
    {
      id: 2,
      title: "Pixel Dungeon",
      description:
        "A retro-style dungeon crawler where players explore randomly generated dungeons, battle monsters, and collect equipment and items. Combining classic pixel art with modern game design, it offers a nostalgic yet fresh gaming experience.",
      image: "/images/Pixel Dungeon.jpeg",
      technologies: ["Unity", "C#", "Pixel Art", "Procedural Generation"],
      releaseDate: "2024-09-20",
      link: "#",
    },
    {
      id: 3,
      title: "Space Exploration",
      description:
        "A sci-fi space exploration game where players can freely explore the universe, discover new planets and civilizations, trade, and battle. With vast cosmic maps, rich mission systems, and deep character progression, it offers an immersive space exploration experience.",
      image: "/images/Space Exploration.jpeg",
      technologies: ["Unreal Engine", "C++", "3D Modeling", "Space Physics"],
      releaseDate: "2025-03-10",
      link: "#",
    },
    {
      id: 4,
      title: "Magic Farm",
      description:
        "A farming game blending simulation and RPG elements, where players manage their farm in a magical world, grow enchanted crops, raise mystical animals, interact with villagers, and complete various quests.",
      image: "/images/Magic Farm.jpeg",
      technologies: ["Unity", "C#", "2D Art", "Simulation"],
      releaseDate: "2025-06-05",
      link: "#",
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
              Our Projects
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
              Here are the game projects we've developed—each one represents our creativity and
              dedication
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
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
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
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "16rem", objectFit: "cover" }}
                />
                <div style={{ padding: "2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        fontFamily: "Kalam, cursive",
                        color: "#2d2d2d",
                      }}
                    >
                      {project.title}
                    </h2>
                    <span
                      style={{
                        fontSize: "0.875rem",
                        fontFamily: "Patrick Hand, cursive",
                        color: "#2d2d2d",
                      }}
                    >
                      {project.releaseDate}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontFamily: "Patrick Hand, cursive",
                      color: "#2d2d2d",
                      marginBottom: "1.5rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {project.description}
                  </p>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h3
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: "bold",
                        fontFamily: "Kalam, cursive",
                        color: "#2d2d2d",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Tech Stack
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
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
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    className="hand-drawn-button"
                    style={{
                      display: "inline-block",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      backgroundColor: "white",
                      color: "#2d2d2d",
                      fontFamily: "Patrick Hand, cursive",
                      fontSize: "1rem",
                      textDecoration: "none",
                    }}
                  >
                    View Details
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

export default Projects;
