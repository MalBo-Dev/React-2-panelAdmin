import React from "react";

const Leftsidebar = () => {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin5">
      <div className="scroll-sidebar ps-container ps-theme-default ps-active-y">
        <nav className="sidebar-nav">
          <ul id="sidebarnav" className="in">
            <li className="nav-small-cap">
              <i className="mdi mdi-dots-horizontal"></i>
              <span className="hide-menu">Personal</span>
            </li>
            <li className="sidebar-item selected">
              <a className="sidebar-link has-arrow waves-effect waves-dark" href="#!" aria-expanded="false">
                <i className="mdi mdi-av-timer"></i>
                <span className="hide-menu">Dashboard</span>
                <span className="badge badge-pill badge-info ml-auto m-r-15">3</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="index.html" className="sidebar-link">
                    <i className="mdi mdi-adjust"></i>
                    <span className="hide-menu"> Classic </span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="index2.html" className="sidebar-link">
                    <i className="mdi mdi-adjust"></i>
                    <span className="hide-menu"> Analytical </span>
                  </a>
                </li>
                <li className="sidebar-item active">
                  <a href="index3.html" className="sidebar-link active">
                    <i className="mdi mdi-adjust"></i>
                    <span className="hide-menu"> Modern </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow waves-effect waves-dark" href="#!" aria-expanded="false">
                <i className="mdi mdi-tune"></i>
                <span className="hide-menu">Sidebar Type</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                {[
                  { href: "sidebar-type-minisidebar.html", icon: "mdi-view-quilt", label: "Minisidebar" },
                  { href: "sidebar-type-iconsidebar.html", icon: "mdi-view-parallel", label: "Icon Sidebar" },
                  { href: "sidebar-type-overlaysidebar.html", icon: "mdi-view-day", label: "Overlay Sidebar" },
                  { href: "sidebar-type-fullsidebar.html", icon: "mdi-view-array", label: "Full Sidebar" },
                  { href: "sidebar-type-horizontalsidebar.html", icon: "mdi-view-module", label: "Horizontal Sidebar" },
                ].map(({ href, icon, label }) => (
                  <li className="sidebar-item" key={href}>
                    <a href={href} className="sidebar-link">
                      <i className={`mdi ${icon}`}></i>
                      <span className="hide-menu"> {label} </span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link has-arrow waves-effect waves-dark" href="#!" aria-expanded="false">
                <i className="mdi mdi-notification-clear-all"></i>
                <span className="hide-menu">Multi level dd</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="#!" className="sidebar-link">
                    <i className="mdi mdi-octagram"></i>
                    <span className="hide-menu"> item 1.1</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#!" className="sidebar-link">
                    <i className="mdi mdi-octagram"></i>
                    <span className="hide-menu"> item 1.2</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="has-arrow sidebar-link" href="#!" aria-expanded="false">
                    <i className="mdi mdi-playlist-plus"></i>
                    <span className="hide-menu">Menu 1.3</span>
                  </a>
                  <ul aria-expanded="false" className="collapse second-level">
                    {[1, 2, 3, 4].map(num => (
                      <li className="sidebar-item" key={num}>
                        <a href="#!" className="sidebar-link">
                          <i className="mdi mdi-octagram"></i>
                          <span className="hide-menu"> item 1.3.{num}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a href="#!" className="sidebar-link">
                    <i className="mdi mdi-playlist-check"></i>
                    <span className="hide-menu"> item 1.4</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">
              <i className="mdi mdi-dots-horizontal"></i>
              <span className="hide-menu">Extra</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link waves-effect waves-dark sidebar-link" href="../../docs/documentation.html" aria-expanded="false">
                <i className="mdi mdi-content-paste"></i>
                <span className="hide-menu">Documentation</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link waves-effect waves-dark sidebar-link" href="authentication-login1.html" aria-expanded="false">
                <i className="mdi mdi-directions"></i>
                <span className="hide-menu">Log Out</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Leftsidebar;
