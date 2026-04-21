import { Link } from "react-router-dom";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BRAND } from "../../lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t-2 border-border py-12">
      <div className="mx-auto max-w-[80rem] px-4">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link to="/" className="font-kalam text-3xl font-bold text-foreground no-underline">
              {BRAND.name}
            </Link>
            <p className="mt-2 font-patrick text-foreground">{BRAND.tagline}</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={BRAND.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground jiggle"
              aria-label="Visit our GitHub page"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={BRAND.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground jiggle"
              aria-label="Visit our X page"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href={BRAND.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground jiggle"
              aria-label="Join our Discord server"
            >
              <FaDiscord size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t-2 border-border pt-8 text-center">
          <p className="font-patrick text-foreground tabular-nums">
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
