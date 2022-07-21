import { FC, useState } from "react";
import useViewport from "../../../hooks/useViewport";

interface IProps {
  Icon: React.ElementType;
  title: string;
  links: string[];
}

const FooterChild: FC<IProps> = ({ Icon, title, links }) => {
  const viewPortWidth: number = useViewport();
  const [showLinks, setShowLinks] = useState<boolean>(false);

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
            <p key={link} className="text-sm mt-9 text-links">
              {link}
            </p>
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
