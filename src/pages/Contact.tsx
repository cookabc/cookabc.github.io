import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaDiscord, FaEnvelope } from "react-icons/fa";

const Contact = () => {
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
              Get in Touch
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
              If you have any questions or collaboration inquiries, feel free to reach out anytime
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
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                position: "relative",
                transform: "rotate(-1deg)",
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
                Contact Info
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  {
                    icon: <FaEnvelope size={24} />,
                    title: "Email",
                    value: "hello@veryfuncompany.com",
                    link: "mailto:hello@veryfuncompany.com",
                  },
                  {
                    icon: <FaGithub size={24} />,
                    title: "GitHub",
                    value: "github.com/veryfuncompany",
                    link: "https://github.com/veryfuncompany",
                  },
                  {
                    icon: <FaTwitter size={24} />,
                    title: "Twitter",
                    value: "@veryfuncompany",
                    link: "https://twitter.com/veryfuncompany",
                  },
                  {
                    icon: <FaDiscord size={24} />,
                    title: "Discord",
                    value: "veryfuncompany#1234",
                    link: "https://discord.gg/veryfuncompany",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        backgroundColor: "#e5e0d8",
                        borderRadius: "9999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#2d2d2d",
                      }}
                      className="jiggle"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: "bold",
                          fontFamily: "Kalam, cursive",
                          color: "#2d2d2d",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.title}
                      </h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "Patrick Hand, cursive",
                          color: "#2d2d2d",
                          textDecoration: "underline",
                          textDecorationStyle: "wavy",
                          textDecorationColor: "#ff4d4d",
                          textDecorationThickness: "2px",
                        }}
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
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
              <div className="tack"></div>
              <h2
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "bold",
                  fontFamily: "Kalam, cursive",
                  color: "#2d2d2d",
                  marginBottom: "1.5rem",
                }}
              >
                Send a Message
              </h2>
              <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      fontFamily: "Patrick Hand, cursive",
                      color: "#2d2d2d",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="hand-drawn-input"
                    style={{
                      width: "100%",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      backgroundColor: "white",
                      color: "#2d2d2d",
                      fontFamily: "Patrick Hand, cursive",
                    }}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      fontFamily: "Patrick Hand, cursive",
                      color: "#2d2d2d",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="hand-drawn-input"
                    style={{
                      width: "100%",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      backgroundColor: "white",
                      color: "#2d2d2d",
                      fontFamily: "Patrick Hand, cursive",
                    }}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      fontFamily: "Patrick Hand, cursive",
                      color: "#2d2d2d",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="hand-drawn-input"
                    style={{
                      width: "100%",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      backgroundColor: "white",
                      color: "#2d2d2d",
                      fontFamily: "Patrick Hand, cursive",
                    }}
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="hand-drawn-button"
                  style={{
                    width: "100%",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                    backgroundColor: "white",
                    color: "#2d2d2d",
                    fontFamily: "Patrick Hand, cursive",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
