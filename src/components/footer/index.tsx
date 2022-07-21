import { svgs } from "../../constants";
import { ChevronRightIcon } from "@heroicons/react/solid";

// Components
import FooterChild from "./footer_child/FooterChild";

const Footer = () => {
  const socials = [svgs.fb, svgs.ig, svgs.tt];
  const contacts = ["Help", "FAQs", "Inquires"];
  const links = ["Templates", "Resume Builder", "Blog", "Contact Us"];
  const company = ["About Us", "Services", "The Team", "Reservations"];

  return (
    <div className="mt-36">
      <hr />

      <div className="flex flex-col md:justify-between p-9 md:flex-row">
        <div className="brand flex space-x-2 mb-16 md:mb-0">
          <img src={svgs.star} className="h-[1.4rem] w-[1.4rem]" alt="star" />
          <h5 className="text-alium font-bold text-xl">Alium</h5>
        </div>
        <FooterChild
          Icon={ChevronRightIcon}
          title="Popular Links"
          links={links}
        />
        <FooterChild Icon={ChevronRightIcon} title="Company" links={company} />
        <FooterChild
          Icon={ChevronRightIcon}
          title="Contacts"
          links={contacts}
        />
        <div className="f-links">
          <h5 className="footer-heading">Socials</h5>
          <div className="flex space-x-9 items-center md:space-x-0 md:flex-col">
            {socials.map((social, index) => (
              <img key={index} src={social} alt="social" className="mt-9" />
            ))}
          </div>
        </div>
      </div>

      <hr />
      <div className="flex items-center justify-between p-4">
        <p className="text-[#292929] font-bold text-xs md:text-base">
          Terms and Conditions
        </p>
        <p className="text-[#292929] font-bold text-xs md:text-base">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
