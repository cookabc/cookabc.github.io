import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaDiscord, FaEnvelope } from "react-icons/fa";

const CONTACT_INFO = [
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
] as const;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-[80rem] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 font-kalam text-4xl font-bold text-foreground">Get in Touch</h1>
            <p className="mx-auto max-w-3xl font-patrick text-xl text-foreground">
              If you have any questions or collaboration inquiries, feel free to reach out anytime
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[80rem] px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="-rotate-1 rounded-wobbly-md border-2 border-border bg-white p-8 relative"
            >
              <div className="tape" />
              <h2 className="mb-6 font-kalam text-2xl font-bold text-foreground">Contact Info</h2>
              <div className="flex flex-col gap-6">
                {CONTACT_INFO.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground jiggle"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="mb-0.5 font-kalam text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-patrick underline decoration-wavy decoration-accent decoration-2 text-foreground"
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
              className="rotate-1 rounded-wobbly-md border-2 border-border bg-white p-8 relative"
            >
              <div className="tack" />
              <h2 className="mb-6 font-kalam text-2xl font-bold text-foreground">Send a Message</h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <p className="text-4xl mb-4">🎉</p>
                  <p className="font-kalam text-xl font-bold text-foreground">Message Sent!</p>
                  <p className="mt-2 font-patrick text-foreground">
                    We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block font-patrick text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="hand-drawn-input w-full px-4 py-2 font-patrick text-foreground placeholder:text-muted"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block font-patrick text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="hand-drawn-input w-full px-4 py-2 font-patrick text-foreground placeholder:text-muted"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block font-patrick text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="hand-drawn-input w-full px-4 py-2 font-patrick text-foreground resize-y placeholder:text-muted"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="hand-drawn-button w-full px-6 py-3 font-patrick text-base font-medium text-foreground"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
