import React from "react";
import Header from "./Header";
import HeaderSection from "./HeaderSection";


const HeaderMain = () => {
  return (
   
<div className="header-and-banner-con w-100 float-left position-relative">
  <div className="header-and-banner-inner-con">

    <Header />
    <HeaderSection />

    </div>
</div>
  );
};

export default HeaderMain;
