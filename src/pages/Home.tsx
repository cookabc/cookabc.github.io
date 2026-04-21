import { useMemo } from "react";
import HeroSection from "../components/common/HeroSection";
import { motion } from "framer-motion";

const FEATURE_CARDS = [
  {
    title: "Game Development",
    description: "Focused on indie game development using modern game engines and tech stacks",
    icon: "🎮",
    rotation: -0.8,
  },
  {
    title: "Creative Design",
    description:
      "Emphasizing creative game design and user experience to create unique gaming experiences",
    icon: "✨",
    rotation: 0.6,
  },
  {
    title: "Technical Innovation",
    description:
      "Continuously exploring new technologies and methods to improve game quality and performance",
    icon: "🚀",
    rotation: -0.4,
  },
] as const;

const Home = () => {
  const rotations = useMemo(() => FEATURE_CARDS.map((c) => c.rotation), []);

  return (
    <div>
      <HeroSection
        title="Creating a Happier World"
        subtitle="We are an independent game studio dedicated to crafting games that bring joy to people. Through our games, we aim to create a world filled with imagination and hope."
        buttonText="View Our Projects"
        buttonLink="/projects"
      />

      <section className="py-20">
        <div className="mx-auto max-w-[80rem] px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="mb-5 font-kalam text-4xl font-bold text-foreground">About Us</h2>
            <p className="mx-auto max-w-3xl font-patrick text-2xl leading-relaxed text-foreground">
              We are passionate game developers with years of experience in the industry. We believe
              games are more than entertainment—they are an art form that can convey emotions and
              values. Our goal is to create games that bring players joy and food for thought.
            </p>
          </motion.div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURE_CARDS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="hand-drawn-card jiggle relative bg-white p-10"
                style={{ transform: `rotate(${rotations[index]}deg)` }}
              >
                <div className="tape" />
                <div className="mb-6 text-5xl">{item.icon}</div>
                <h3 className="mb-4 font-kalam text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="font-patrick text-lg leading-relaxed text-foreground">
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
