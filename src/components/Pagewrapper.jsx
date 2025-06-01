import React from "react";
import Pagebreadcrumb from "./Pagebreadcrumb";
import Container from "./Container";
import Chart from "./Chart";
import CartItem from "./CartItem";

const Pagewrapper = () => {
  return (
    <div class="page-wrapper">
      <Pagebreadcrumb />
      <Container />

      <div className="row" style={{ padding: "20px" }}>

        <Chart />
        <CartItem />
      </div>
    </div>
  );
};

export default Pagewrapper;
