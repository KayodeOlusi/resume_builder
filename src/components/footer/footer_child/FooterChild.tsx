import { FC, useState } from "react";
import { motion } from "framer-motion";
import useViewport from "../../../hooks/useViewport";

interface IProps {
  Icon: React.ElementType;
  title: string;
  links: string[];
}

const FooterChild: FC<IProps> = ({ Icon, title, links }) => {
  const viewPortWidth: number = useViewport();
  const [showLinks, setShowLinks] = useState<boolean>(false);

  const variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="f-links">
      <div
        className="flex items-center space-x-1"
        onClick={() => setShowLinks(!showLinks)}
      >
        <h5 className="footer-heading">{title}</h5>
        <Icon className="w-6 h-6 text-alium block md:hidden" />
      </div>

      {viewPortWidth < 768
        ? showLinks &&
          links.map((link) => (
            <motion.p
              variants={variants}
              initial="hidden"
              animate="visible"
              key={link}
              className="text-sm mt-9 text-links"
            >
              {link}
            </motion.p>
          ))
        : links.map((link) => (
            <p key={link} className="text-sm mt-9 text-links">
              {link}
            </p>
          ))}
    </div>
  );
};

export default FooterChild;
