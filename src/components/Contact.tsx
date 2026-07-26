import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:abdulsaboor57@yahoo.com" data-cursor="disable">
                abdulsaboor57@yahoo.com
              </a>
            </p>
            <h4>Education</h4>
            <p>BS in Computer Science</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/asaboor-art"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-saboor-20b56a51/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7m%2BRIXmLRASVhc9cGl%2BRZg%3D%3D"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.fiverr.com/saboor1991/buying?source=avatar_menu_profile"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Fiverr <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Abdul Saboor</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
