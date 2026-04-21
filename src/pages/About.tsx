import { useMemo } from "react";
import { motion } from "framer-motion";

const TECH_STACK = [
  { name: "Unity", icon: "🎮", rotation: -0.5 },
  { name: "Unreal Engine", icon: "⚡", rotation: 0.7 },
  { name: "C#", icon: "💻", rotation: -0.3 },
  { name: "C++", icon: "🔧", rotation: 0.9 },
  { name: "JavaScript", icon: "🌐", rotation: -0.8 },
  { name: "TypeScript", icon: "✅", rotation: 0.4 },
  { name: "React", icon: "⚛️", rotation: -0.6 },
  { name: "Tailwind CSS", icon: "🎨", rotation: 0.2 },
] as const;

const VALUES = [
  {
    title: "Innovation",
    description:
      "Continuously exploring new game mechanics and technologies to create unique gaming experiences",
    rotation: 0.5,
  },
  {
    title: "Quality",
    description: "Focusing on game quality and details to provide the best experience for players",
    rotation: -0.7,
  },
  {
    title: "Joy",
    description:
      "The core of games is bringing joy to players—this is the principle we always adhere to",
    rotation: 0.3,
  },
] as const;

const About = () => {
  const techRotations = useMemo(() => TECH_STACK.map((t) => t.rotation), []);
  const valueRotations = useMemo(() => VALUES.map((v) => v.rotation), []);

  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-[80rem] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 font-kalam text-4xl font-bold text-foreground">About Us</h1>
            <p className="mx-auto max-w-3xl font-patrick text-xl text-foreground">
              A passionate indie game development studio
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[80rem] px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="jiggle relative -rotate-2"
            >
              <img
                src="/images/about.jpeg"
                alt="The VeryFun Company team working together on game development"
                className="h-auto w-full rounded-wobbly-md border-2 border-border outline outline-1 outline-black/10"
              />
              <div className="tack" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rotate-1 rounded-wobbly-md border-2 border-border bg-white p-8 relative"
            >
              <div className="tape" />
              <h2 className="mb-6 font-kalam text-2xl font-bold text-foreground">Our Story</h2>
              <p className="mb-4 font-patrick text-lg leading-relaxed text-foreground">
                Since childhood, we have been deeply passionate about games—whether playing them or
                studying the technology behind them. During college, we began learning programming
                and game development, embarking on our journey in this field.
              </p>
              <p className="mb-4 font-patrick text-lg leading-relaxed text-foreground">
                After graduation, we worked at a game company for several years, gaining valuable
                experience. But we always dreamed of creating our own games, so we decided to become
                an independent game studio.
              </p>
              <p className="font-patrick text-lg leading-relaxed text-foreground">
                Now, we focus on developing games that bring joy to people, hoping to create a
                happier world through our games.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[80rem] px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="mb-2 font-kalam text-2xl font-bold text-foreground">Tech Stack</h2>
            <p className="font-patrick text-lg text-foreground">
              The main technologies and tools we use
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {TECH_STACK.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hand-drawn-card jiggle relative bg-white p-6 text-center"
                style={{ transform: `rotate(${techRotations[index]}deg)` }}
              >
                <div className="tack" />
                <div className="mb-2 text-4xl">{tech.icon}</div>
                <h3 className="font-patrick text-base text-foreground">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[80rem] px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="mb-2 font-kalam text-2xl font-bold text-foreground">Our Values</h2>
            <p className="font-patrick text-lg text-foreground">
              Our understanding and beliefs about game development
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="hand-drawn-card jiggle relative bg-white p-8"
                style={{ transform: `rotate(${valueRotations[index]}deg)` }}
              >
                <div className="tape" />
                <h3 className="mb-4 font-kalam text-xl font-bold text-foreground">{value.title}</h3>
                <p className="font-patrick leading-normal text-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
