import React from "react";
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import Pagewrapper from "./Pagewrapper";


const Mainwrapper = () => {
  return (
   
<div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">

    <Header />
    <Leftsidebar />
<Pagewrapper />

</div>
  );
};

export default Mainwrapper;
