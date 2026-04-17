import HeroSection from "../components/common/HeroSection";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <HeroSection
        title="Creating a Happier World"
        subtitle="We are an independent game studio dedicated to crafting games that bring joy to people. Through our games, we aim to create a world filled with imagination and hope."
        buttonText="View Our Projects"
        buttonLink="/projects"
      />

      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "5rem" }}
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                fontFamily: "Kalam, cursive",
                color: "#2d2d2d",
                marginBottom: "2rem",
              }}
            >
              About Us
            </h2>
            <p
              style={{
                fontSize: "1.5rem",
                maxWidth: "48rem",
                margin: "0 auto",
                lineHeight: "1.6",
                fontFamily: "Patrick Hand, cursive",
                color: "#2d2d2d",
              }}
            >
              We are passionate game developers with years of experience in the industry. We believe
              games are more than entertainment—they are an art form that can convey emotions and
              values. Our goal is to create games that bring players joy and food for thought.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
            }}
          >
            {[
              {
                title: "Game Development",
                description:
                  "Focused on indie game development using modern game engines and tech stacks",
                icon: "🎮",
              },
              {
                title: "Creative Design",
                description:
                  "Emphasizing creative game design and user experience to create unique gaming experiences",
                icon: "✨",
              },
              {
                title: "Technical Innovation",
                description:
                  "Continuously exploring new technologies and methods to improve game quality and performance",
                icon: "🚀",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="hand-drawn-card jiggle"
                style={{
                  backgroundColor: "white",
                  padding: "2.5rem",
                  position: "relative",
                  transform: `rotate(${Math.random() * 2 - 1}deg)`,
                }}
              >
                <div className="tape"></div>
                <div style={{ fontSize: "5rem", marginBottom: "1.5rem" }}>{item.icon}</div>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    fontFamily: "Kalam, cursive",
                    color: "#2d2d2d",
                    marginBottom: "1rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: "1.6",
                    fontFamily: "Patrick Hand, cursive",
                    color: "#2d2d2d",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
