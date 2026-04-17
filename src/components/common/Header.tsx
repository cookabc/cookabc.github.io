import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      style={{
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        borderBottomWidth: "2px",
        borderBottomStyle: "solid",
        borderBottomColor: "#2d2d2d",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
        <nav style={{ display: "flex", gap: "2rem" }}>
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/blog", label: "Blog" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="jiggle"
            >
              <Link
                to={item.path}
                style={{
                  fontSize: "1.125rem",
                  color: "#2d2d2d",
                  fontFamily: "Patrick Hand, cursive",
                  textDecoration: "underline",
                  textDecorationStyle: "wavy",
                  textDecorationColor: "#ff4d4d",
                  textDecorationThickness: "2px",
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
