import React from "react";

function FooterNav() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about-con", label: "About" },
    { href: "#service-con", label: "Services" },
    { href: "#Portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Blog" },
    { href: "#Contact", label: "Contact" },
  ];

  return (
    <div className="footer-navbar">
      <ul className="list-unstyled">
        {links.map((link, idx) => (
          <li
            key={idx}
            className={`d-inline-block ${
              idx === 0 ? "border-left-0 pl-0" : ""
            }`}
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcons() {
  const socials = [
    { href: "https://www.behance.net/", iconClass: "fab fa-behance" },
    { href: "https://dribbble.com/", iconClass: "fab fa-dribbble" },
    { href: "https://www.linkedin.com/", iconClass: "fab fa-linkedin-in" },
  ];

  return (
    <div className="footer-social-icon">
      <ul className="mb-0">
        {socials.map((social, idx) => (
          <li key={idx} className="d-inline-block">
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              <i
                className={`${social.iconClass} d-flex align-items-center justify-content-center`}
              ></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = () => (
  <div className="w-100 float-left weight-footer-con position-relative">
    <div className="container">
      <div
        className="weight-footer-content text-center wow fadeInUp"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <figure>
          <img
            src="src/assets/image/footer-logo.png"
            alt="footer-logo"
            className="img-fluid"
          />
        </figure>

        <FooterNav />

        <SocialIcons />
      </div>
      <div className="copy-right-content text-center">
        <p className="mb-0">
          Copyright 2022 FolioFlix.com | All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
