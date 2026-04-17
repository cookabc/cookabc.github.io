import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        borderTopWidth: "2px",
        borderTopStyle: "solid",
        borderTopColor: "#2d2d2d",
        marginTop: "auto",
      }}
    >
      <div
        style={{ maxWidth: "80rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <Link
              to="/"
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                fontFamily: "Kalam, cursive",
                color: "#2d2d2d",
                textDecoration: "none",
              }}
            >
              VeryFun Company
            </Link>
            <p
              style={{ marginTop: "0.5rem", color: "#2d2d2d", fontFamily: "Patrick Hand, cursive" }}
            >
              Creating a happier world through games
            </p>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="https://github.com/veryfuncompany"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2d2d2d" }}
              className="jiggle"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com/veryfuncompany"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2d2d2d" }}
              className="jiggle"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://discord.gg/veryfuncompany"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2d2d2d" }}
              className="jiggle"
            >
              <FaDiscord size={24} />
            </a>
          </div>
        </div>
        <div
          style={{
            marginTop: "2rem",
            paddingTop: "2rem",
            borderTopWidth: "2px",
            borderTopStyle: "solid",
            borderTopColor: "#2d2d2d",
            textAlign: "center",
            color: "#2d2d2d",
            fontFamily: "Patrick Hand, cursive",
          }}
        >
          <p>&copy; {new Date().getFullYear()} VeryFun Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
