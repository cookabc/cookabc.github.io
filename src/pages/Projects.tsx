import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: 1,
    title: "Joy Adventure",
    description:
      "An imaginative platform adventure game where players explore a colorful world, solve puzzles, collect items, and battle enemies. Featuring beautiful 2D graphics and smooth animations.",
    image: "/images/Joy Adventure.jpeg",
    technologies: ["Unity", "C#", "2D Art", "Pixel Art"],
    releaseDate: "2024-06-15",
    link: "/projects/joy-adventure",
    rotation: -0.5,
  },
  {
    id: 2,
    title: "Pixel Dungeon",
    description:
      "A retro-style dungeon crawler where players explore randomly generated dungeons, battle monsters, and collect equipment and items. Combining classic pixel art with modern game design.",
    image: "/images/Pixel Dungeon.jpeg",
    technologies: ["Unity", "C#", "Pixel Art", "Procedural Generation"],
    releaseDate: "2024-09-20",
    link: "/projects/pixel-dungeon",
    rotation: 0.7,
  },
  {
    id: 3,
    title: "Space Exploration",
    description:
      "A sci-fi space exploration game where players can freely explore the universe, discover new planets and civilizations, trade, and battle. With vast cosmic maps and deep character progression.",
    image: "/images/Space Exploration.jpeg",
    technologies: ["Unreal Engine", "C++", "3D Modeling", "Space Physics"],
    releaseDate: "2025-03-10",
    link: "/projects/space-exploration",
    rotation: -0.3,
  },
  {
    id: 4,
    title: "Magic Farm",
    description:
      "A farming game blending simulation and RPG elements, where players manage their farm in a magical world, grow enchanted crops, raise mystical animals, and complete various quests.",
    image: "/images/Magic Farm.jpeg",
    technologies: ["Unity", "C#", "2D Art", "Simulation"],
    releaseDate: "2025-06-05",
    link: "/projects/magic-farm",
    rotation: 0.4,
  },
] as const;

const Projects = () => {
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-[80rem] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 font-kalam text-4xl font-bold text-foreground">Our Projects</h1>
            <p className="mx-auto max-w-3xl font-patrick text-xl text-foreground">
              Here are the game projects we&apos;ve developed—each one represents our creativity and
              dedication
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[80rem] px-4">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="hand-drawn-card overflow-hidden bg-white relative"
              >
                <div className="tack" />
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="h-64 w-full object-cover outline outline-1 outline-black/10"
                />
                <div className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-kalam text-2xl font-bold text-foreground">
                      {project.title}
                    </h2>
                    <time
                      dateTime={project.releaseDate}
                      className="font-patrick text-sm text-foreground"
                    >
                      {project.releaseDate}
                    </time>
                  </div>
                  <p className="mb-6 font-patrick leading-relaxed text-foreground">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="mb-2 font-kalam text-sm font-bold text-foreground">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-muted px-3 py-1 font-patrick text-sm text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={project.link}
                    className="hand-drawn-button inline-block bg-white px-6 py-2 font-patrick text-base no-underline text-foreground"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
