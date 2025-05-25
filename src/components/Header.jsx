import React from "react";

const NavItem = ({ href, label, active }) => (
  <li className={`nav-item ${active ? "active pl-0" : ""}`}>
    <a className={`nav-link p-0 ${active ? "is-active" : ""}`} href={href}>
      {label} {active && <span className="sr-only">(current)</span>}
    </a>
  </li>
);

const Header = () => {
  const navLinks = [
    { href: "index.html", label: "Home", active: true },
    { href: "#service-con", label: "Services" },
    { href: "#about-con", label: "About" },
    { href: "#Portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <header className="main-header">
      <div className="container pl-0 pr-0">
        <div className="header-con">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <a className="navbar-brand p-0" href="index.html">
              <img
                src="src/assets/image/logo-img.png"
                alt="logo-img"
                className="img-fluid"
              />
            </a>

            <button
              className="navbar-toggler p-0 collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                {navLinks.map(({ href, label, active }, idx) => (
                  <NavItem key={idx} href={href} label={label} active={active} />
                ))}
              </ul>
              <div className="d-inline-block contact">
                <a href="#Contact">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
