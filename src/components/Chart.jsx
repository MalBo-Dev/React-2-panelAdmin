import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Chart = () => {
  const [selectedMonth, setSelectedMonth] = useState("0");
  const [data, setData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost/projectApi/api2.php?chartdata=1&month=${selectedMonth}`)
      .then((response) => {

        const fetchedData =
          typeof response.data === "string"
            ? JSON.parse(response.data)
            : response.data;

        if (fetchedData.labels && fetchedData.series) {
          setData(fetchedData);
        } else {
          console.error("Invalid data format from API:", fetchedData);
          setData(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData(null);
      });
  }, [selectedMonth]);


  useEffect(() => {
    if (!data) return;
    if (!window.Chartist) {
      console.error("Chartist not loaded!");
      return;
    }

    const options = {
      low: 0,
      showArea: true,
      fullWidth: true,
      height: "300px",
      axisY: {
        onlyInteger: true,
      },
    };

    // پاک کردن چارت قبلی
    if (chartRef.current) {
      chartRef.current.innerHTML = "";
    }

    // ساخت چارت جدید
    new window.Chartist.Line(chartRef.current, data, options);
  }, [data]);

  return (
    <div className="col-lg-8 col-md-12">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <h4 className="card-title">Sales Ratio</h4>
            </div>
            <div className="ml-auto">
              <select
                className="custom-select border-0 text-muted"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="0">August 2018</option>
                <option value="1">May 2018</option>
              </select>
            </div>
          </div>

          <div
            className="sales5 ct-charts m-t-30"
            style={{ position: "relative", height: "300px" }}
            ref={chartRef}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
