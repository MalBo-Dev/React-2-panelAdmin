import React, { useEffect, useState } from "react";
import axios from "axios";

const InfoCard = ({ iconClass, colorClass, title, value }) => (
  <div className="col-lg-3 col-md-6">
    <div className="card">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-7">
            <i className={`mdi ${iconClass} font-20 ${colorClass}`}></i>
            <p className="font-16 mb-2">{title}</p>
          </div>
          <div className="col-5">
            <h1 className="font-light text-end mb-0">{value}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Container = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/projectApi/api2.php?amar")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("خطا در دریافت اطلاعات:", error);
      });
  }, []);

  const iconMapping = [
    { icon: "mdi-emoticon", color: "text-info" },
    { icon: "mdi-image", color: "text-success" },
    { icon: "mdi-currency-eur", color: "text-purple" },
    { icon: "mdi-poll", color: "text-danger" },
  ];

  return (
    <div className="container-fluid" style={{ minHeight: "auto" }}>
      <div className="row">
        {cards.map((card, index) => (
          <InfoCard
            key={card.id}
            iconClass={iconMapping[index % iconMapping.length].icon}
            colorClass={iconMapping[index % iconMapping.length].color}
            title={card.name || card.title}
            value={card.value || card.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;
