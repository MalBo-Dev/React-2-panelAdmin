import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=36.2131&longitude=59.7961&current_weather=true"
        );
        setWeather(response.data.current_weather);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات آب و هوا:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="card bg-info">
      <div className="card-body mb-0">
        <h4 className="card-title text-white">
          Thursday{" "}
          <span className="font-14 font-normal text-white op-5">12th April, 2018</span>
        </h4>
        <div className="d-flex align-items-center flex-row m-t-30">
          <h1 className="font-light text-white">
            <i className="wi wi-day-sleet"></i>{" "}
            <span>
              {weather ? `${weather.temperature}°` : "در حال بارگذاری..."}
            </span>
          </h1>
        </div>
      </div>

      <div
        className="weather-report c3"
        style={{
          height: "78px",
          width: "100%",
          maxHeight: "78px",
          position: "relative",
        }}
      ></div>
    </div>
  );
};

const UserStatsCard = () => {
  return (
    <div className="card bg-success text-white">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="card-title mb-0">Users</h4>
          <h2 className="font-weight-light mb-0">35,658</h2>
        </div>
        <div className="mt-4">
          <ul className="list-unstyled">
            <li className="mb-4">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-0 font-weight-medium">
                  58%{" "}
                  <small className="font-weight-normal text-white-50 ml-2">
                    New Users
                  </small>
                </h5>
              </div>
              <div
                className="progress mt-2"
                style={{
                  height: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
              >
                <div
                  className="progress-bar bg-white"
                  role="progressbar"
                  style={{ width: "58%" }}
                  aria-valuenow="58"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-0 font-weight-medium">
                  16%{" "}
                  <small className="font-weight-normal text-white-50 ml-2">
                    Repeat Users
                  </small>
                </h5>
              </div>
              <div
                className="progress mt-2"
                style={{
                  height: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
              >
                <div
                  className="progress-bar bg-white"
                  role="progressbar"
                  style={{ width: "16%" }}
                  aria-valuenow="16"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const CartItem = () => {
  return (
    <div className="col-lg-4 col-md-12">
      <WeatherCard />
      <UserStatsCard />
    </div>
  );
};

export default CartItem;
