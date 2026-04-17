import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({ title, subtitle, buttonText, buttonLink }: HeroSectionProps) => {
  return (
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
            {title}
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "48rem",
              margin: "0 auto",
              marginBottom: "2.5rem",
              fontFamily: "Patrick Hand, cursive",
              color: "#2d2d2d",
              lineHeight: "1.6",
            }}
          >
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <motion.a
              href={buttonLink}
              className="hand-drawn-button"
              style={{
                display: "inline-block",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                backgroundColor: "white",
                fontSize: "1.125rem",
                fontFamily: "Patrick Hand, cursive",
                textDecoration: "none",
                color: "#2d2d2d",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonText}
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
