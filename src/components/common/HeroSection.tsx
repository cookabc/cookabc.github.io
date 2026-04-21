import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({ title, subtitle, buttonText, buttonLink }: HeroSectionProps) => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[80rem] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 font-kalam text-4xl font-bold text-foreground">{title}</h1>
          <p className="mx-auto mb-10 max-w-3xl font-patrick text-xl leading-relaxed text-foreground">
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={buttonLink}
                className="hand-drawn-button inline-block bg-white px-8 py-3 font-patrick text-lg text-foreground no-underline"
              >
                {buttonText}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
