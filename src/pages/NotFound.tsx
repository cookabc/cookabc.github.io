import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[80rem] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="mb-6 font-kalam text-8xl font-bold text-accent sm:text-9xl">404</h1>
          <p className="mb-3 font-patrick text-3xl text-foreground">Oops! Page not found</p>
          <p className="mx-auto mb-10 max-w-lg font-patrick text-xl leading-relaxed text-muted">
            The page you&apos;re looking for seems to have wandered off into another dimension...
          </p>
          <div className="text-6xl mb-10">🎮🔍🗺️</div>
          <Link
            to="/"
            className="hand-drawn-button inline-block bg-white px-10 py-4 font-patrick text-xl no-underline text-foreground"
          >
            ← Back Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
