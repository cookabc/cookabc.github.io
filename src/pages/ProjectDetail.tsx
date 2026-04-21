import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../data/projects";
import { ExternalLink, ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug ?? "");

  if (!project) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-[80rem] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 font-kalam text-6xl font-bold text-accent">404</h1>
            <p className="mb-2 font-patrick text-2xl text-foreground">Project Not Found</p>
            <p className="mb-8 font-patrick text-lg text-muted">
              This project seems to have wandered off into another dimension...
            </p>
            <Link
              to="/projects"
              className="hand-drawn-button inline-block bg-white px-8 py-3 font-patrick text-lg no-underline text-foreground"
            >
              ← Back to Projects
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
          >
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="mb-8 h-auto w-full rounded-wobbly-md border-2 border-border outline outline-1 outline-black/10 sm:h-[28rem] sm:object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="font-kalam text-4xl font-bold text-foreground sm:text-5xl">
                {project.title}
              </h1>
              <time dateTime={project.releaseDate} className="font-patrick text-sm text-muted">
                Released {project.releaseDate}
              </time>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl"
          >
            <p className="font-patrick text-xl leading-relaxed text-foreground">
              {project.fullDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 grid gap-8 lg:grid-cols-2"
          >
            <div className="hand-drawn-card relative bg-white p-8">
              <div className="tape" />
              <h2 className="mb-6 font-kalam text-2xl font-bold text-foreground">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-patrick text-lg text-foreground"
                  >
                    <span className="mt-0.5 text-accent" aria-hidden="true">
                      ✦
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hand-drawn-card relative bg-white p-8">
              <div className="tack" />
              <h2 className="mb-6 font-kalam text-2xl font-bold text-foreground">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-muted px-4 py-2 font-patrick text-base text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on external site`}
              className="hand-drawn-button inline-flex items-center gap-2 bg-white px-8 py-3 font-patrick text-lg no-underline text-foreground"
            >
              <ExternalLink size={18} />
              View Live Site
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-patrick text-lg underline decoration-wavy decoration-accent decoration-2 text-accent"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </article>
  );
};

export default ProjectDetail;
