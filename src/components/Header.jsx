import React from "react";

const Header = () => {
  return (
    <header className="topbar" data-navbarbg="skin6">
      <nav className="navbar top-navbar navbar-expand-md navbar-light">
        <div className="navbar-header" data-logobg="skin5">
          <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)">
            <i className="ti-menu ti-close"></i>
          </a>

          <div className="navbar-brand">
            <a href="index.html" className="logo">
              <b className="logo-icon">
                <img src="../../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                <img src="../../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
              </b>
              <span className="logo-text">
                <img src="../../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                <img src="../../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
              </span>
            </a>
            <a
              className="sidebartoggler d-none d-md-block"
              href="javascript:void(0)"
              data-sidebartype="mini-sidebar"
            >
              <i className="mdi mdi-toggle-switch mdi-toggle-switch-off font-20"></i>
            </a>
          </div>

          <a
            className="topbartoggler d-block d-md-none waves-effect waves-light"
            href="javascript:void(0)"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ti-more"></i>
          </a>
        </div>

        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin6">
          <ul className="navbar-nav float-left mr-auto">
            <li className="nav-item search-box">
              <a className="nav-link waves-effect waves-dark" href="javascript:void(0)">
                <div className="d-flex align-items-center">
                  <i className="mdi mdi-magnify font-20 mr-1"></i>
                  <div className="ml-1 d-none d-sm-block">
                    <span>Search</span>
                  </div>
                </div>
              </a>
              <form className="app-search position-absolute">
                <input type="text" className="form-control" placeholder="Search & enter" />
                <a className="srh-btn">
                  <i className="ti-close"></i>
                </a>
              </form>
            </li>
          </ul>

          <ul className="navbar-nav float-right">

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle waves-effect waves-dark pro-pic"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="../../assets/images/users/2.jpg" alt="user" className="rounded-circle" width="40" />
                <span className="m-l-5 font-medium d-none d-sm-inline-block">
                  Jonathan Doe <i className="mdi mdi-chevron-down"></i>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                <span className="with-arrow">
                  <span className="bg-primary"></span>
                </span>
                <div className="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10">
                  <div>
                    <img src="../../assets/images/users/2.jpg" alt="user" className="rounded-circle" width="60" />
                  </div>
                  <div className="m-l-10">
                    <h4 className="mb-0">Jonathan Doe</h4>
                    <p className="mb-0">jon@gmail.com</p>
                  </div>
                </div>
                <a className="dropdown-item" href="javascript:void(0)">
                  <i className="ti-user m-r-5 m-l-5"></i> My Profile
                </a>
                <a className="dropdown-item" href="javascript:void(0)">
                  <i className="ti-wallet m-r-5 m-l-5"></i> My Balance
                </a>
                <a className="dropdown-item" href="javascript:void(0)">
                  <i className="ti-email m-r-5 m-l-5"></i> Inbox
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="javascript:void(0)">
                  <i className="ti-settings m-r-5 m-l-5"></i> Account Setting
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="javascript:void(0)">
                  <i className="fa fa-power-off m-r-5 m-l-5"></i> Logout
                </a>
                <div className="dropdown-divider"></div>
                <div className="p-l-30 p-10">
                  <a href="javascript:void(0)" className="btn btn-sm btn-success btn-rounded">
                    View Profile
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
