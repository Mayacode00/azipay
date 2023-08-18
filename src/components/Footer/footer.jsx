import React from "react";
import "./footer.css";
import Logo from "../../assets/footerlogo.svg";
import image1 from "../../assets/Instagram.svg";
import image2 from "../../assets/Twitter.svg";
import image3 from "../../assets/linkedin.svg";
import image4 from "../../assets/facebook.svg";
import Paperplane from "../../assets/send.svg";

const images = [image1, image2, image3, image4];

const Footer = () => {
  const footerLinks = [
    {
      header: "Product",
      links: ["Individual", "Business", "Request Demo", "Pricing"],
    },
    {
      header: "Legal",
      links: ["Privacy Policy", "Terms of Service"],
    },
    {
      header: "Resource",
      links: ["FAQs", "Blog", "Career", "Customer Service"],
    },
  ];
  return (
    <div className="app__footer">
      <div className="app__footer-copyright">
        <img src={Logo} alt="logo" />
        <div className="app__footer-paragraph">
          <p>Copyright © 2023 Eazipay.</p>
          <p>All rights reserved</p>
        </div>
        <div className="social-media">
          {images.map((imageSrc, index) => (
            <div key={index} className="image-item">
              <img src={imageSrc} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="app__footer-link">
        {footerLinks.map((section, index) => (
          <div key={index} className="app__footer-link_section">
            <h3>{section.header}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="app__footer-link-two">
        <div className="app__footer-link_section">
          <h3>Contact us</h3>
          <ul>
            <li>eazipay@gmail.com</li>
            <li>+234 816 878 9518</li>
          </ul>
          <div className="input-container">
            <input
              type="text"
              className="input-field"
              placeholder="Your email address"
              style={{ backgroundColor: "#f2f1f1" }}
            />
            <div className="send-button">
              <img src={Paperplane} alt="send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
