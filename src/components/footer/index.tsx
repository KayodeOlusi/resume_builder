import { svgs } from "../../constants";

const Footer = () => {
  const links = ["Templates", "Resume Builder", "Blog", "Contact Us"];
  const company = ["About Us", "Services", "The Team", "Reservations"];
  const contacts = ["Help", "FAQs", "Inquires"];
  const socials = [svgs.fb, svgs.ig, svgs.tt];

  return (
    <div className="mt-36">
      <hr />

      <div className="flex justify-between p-9">
        <div className="brand flex space-x-2">
          <img src={svgs.star} className="h-[2rem] w-[2rem]" alt="star" />
          <h5 className="text-alium font-bold text-2xl">Alium</h5>
        </div>

        <div className="links">
          <h5 className="footer-heading">Popular Links</h5>
          {links.map((link) => (
            <p key={link} className="text-base text-links mt-9">
              {link}
            </p>
          ))}
        </div>
        <div className="company">
          <h5 className="footer-heading">Company</h5>
          {company.map((link) => (
            <p key={link} className="text-base text-links mt-9">
              {link}
            </p>
          ))}
        </div>
        <div className="contacts">
          <h5 className="footer-heading">Contacts</h5>
          {contacts.map((link) => (
            <p key={link} className="text-base text-links mt-9">
              {link}
            </p>
          ))}
        </div>
        <div className="socials">
          <h5 className="footer-heading">Socials</h5>
          {socials.map((social, index) => (
            <img key={index} src={social} alt="social" className="mt-9" />
          ))}
        </div>
      </div>

      <hr />
      <div className="flex items-center justify-between p-4">
        <p className="text-[#292929] font-bold">Terms and Conditions</p>
        <p className="text-[#292929] font-bold">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
