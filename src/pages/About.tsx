import { motion } from "framer-motion";

const About = () => {
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
              About Us
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
              A passionate indie game development studio
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
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="jiggle"
              style={{ transform: "rotate(-2deg)", position: "relative" }}
            >
              <img
                src="/images/about.jpeg"
                alt="Game Developer"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "var(--wobbly-md)",
                  border: "2px solid #2d2d2d",
                }}
              />
              <div className="tack"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                position: "relative",
                transform: "rotate(1deg)",
                borderRadius: "var(--wobbly-md)",
                border: "2px solid #2d2d2d",
              }}
            >
              <div className="tape"></div>
              <h2
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "bold",
                  fontFamily: "Kalam, cursive",
                  color: "#2d2d2d",
                  marginBottom: "1.5rem",
                }}
              >
                Our Story
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#2d2d2d",
                  fontFamily: "Patrick Hand, cursive",
                  marginBottom: "1rem",
                  lineHeight: "1.6",
                }}
              >
                Since childhood, we have been deeply passionate about games—whether playing them or
                studying the technology behind them. During college, we began learning programming
                and game development, embarking on our journey in this field.
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#2d2d2d",
                  fontFamily: "Patrick Hand, cursive",
                  marginBottom: "1rem",
                  lineHeight: "1.6",
                }}
              >
                After graduation, we worked at a game company for several years, gaining valuable
                experience. But we always dreamed of creating our own games, so we decided to become
                an independent game studio.
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#2d2d2d",
                  fontFamily: "Patrick Hand, cursive",
                  lineHeight: "1.6",
                }}
              >
                Now, we focus on developing games that bring joy to people, hoping to create a
                happier world through our games.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div
          style={{ maxWidth: "80rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              maxWidth: "48rem",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                fontFamily: "Kalam, cursive",
                color: "#2d2d2d",
                marginBottom: "1rem",
              }}
            >
              Tech Stack
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#2d2d2d",
                fontFamily: "Patrick Hand, cursive",
              }}
            >
              The main technologies and tools we use
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { name: "Unity", icon: "🎮" },
              { name: "Unreal Engine", icon: "⚡" },
              { name: "C#", icon: "💻" },
              { name: "C++", icon: "🔧" },
              { name: "JavaScript", icon: "🌐" },
              { name: "TypeScript", icon: "✅" },
              { name: "React", icon: "⚛️" },
              { name: "Tailwind CSS", icon: "🎨" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hand-drawn-card jiggle"
                style={{
                  backgroundColor: "white",
                  padding: "1.5rem",
                  textAlign: "center",
                  position: "relative",
                  transform: `rotate(${Math.random() * 2 - 1}deg)`,
                }}
              >
                <div className="tack"></div>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{tech.icon}</div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Patrick Hand, cursive",
                    color: "#2d2d2d",
                  }}
                >
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div
          style={{ maxWidth: "80rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              maxWidth: "48rem",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                fontFamily: "Kalam, cursive",
                color: "#2d2d2d",
                marginBottom: "1rem",
              }}
            >
              Our Values
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#2d2d2d",
                fontFamily: "Patrick Hand, cursive",
              }}
            >
              Our understanding and beliefs about game development
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                title: "Innovation",
                description:
                  "Continuously exploring new game mechanics and technologies to create unique gaming experiences",
              },
              {
                title: "Quality",
                description:
                  "Focusing on game quality and details to provide the best experience for players",
              },
              {
                title: "Joy",
                description:
                  "The core of games is bringing joy to players—this is the principle we always adhere to",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="hand-drawn-card jiggle"
                style={{
                  backgroundColor: "white",
                  padding: "2rem",
                  position: "relative",
                  transform: `rotate(${Math.random() * 2 - 1}deg)`,
                }}
              >
                <div className="tape"></div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    fontFamily: "Kalam, cursive",
                    color: "#2d2d2d",
                    marginBottom: "1rem",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Patrick Hand, cursive",
                    color: "#2d2d2d",
                    lineHeight: "1.5",
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
