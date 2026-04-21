import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

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
                    to={`/projects/${project.slug}`}
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
