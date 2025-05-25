import React from "react";

const PortfolioHeader = ({ filterSelection }) => {
  return (
    <section className="w-100 float-left portfolio-con padding-top" id="Portfolio">
      <div className="container">
        <div className="generic-title text-center">
          <h6 className="text-white">Creative Works</h6>
          <h2 className="mb-0 text-white">Check My Portfolio</h2>
        </div>
        <div id="myBtnContainer" className="text-center">
          <button
            className="active active_button"
            onClick={() => filterSelection("all")}
          >
            All
          </button>
          <button onClick={() => filterSelection("cars")}>Products</button>
          <button onClick={() => filterSelection("animals")}>Web App</button>
          <button onClick={() => filterSelection("fruits")}>Interaction</button>
          <button onClick={() => filterSelection("colors")}>Brand Identity</button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeader;
