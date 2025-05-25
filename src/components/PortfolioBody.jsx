import React, { useState, useEffect } from 'react';

const PortfolioBody = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch('http://localhost/projectApi/api.php?portfolios')
      .then(res => res.json())
      .then(data => setPortfolios(data))
      .catch(err => console.error('Error fetching portfolios:', err));
  }, []);

  if (portfolios.length === 0) {
    return <p>Loading portfolios...</p>;
  }

  return (
    <section className="w-100 float-left portfolio-body-con">
      <div className="container">
        <div
          className="portfolio-img-con position-relative w-100 float-left wow fadeInUp"
          style={{ visibility: 'visible', animationName: 'fadeInUp' }}
        >
          {portfolios.map((item, index) => (
            <div
              key={item.id || index}
              className={`filterDiv ${item.categories?.join(' ') || ''} position-relative show`}
            >
              <a href="#" data-toggle="modal" data-target={`#modal${item.id}`}>
                <div className="portfolio-img position-relative">
                  <figure>
                    <img
                      src={item.image || 'src/assets/image/portfolio-placeholder.png'}
                      alt={item.title || 'portfolio-img'}
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </a>
              <div className="portfolio-img-content text-left">
                <div className="portfolio-img-title d-inline-block">
                  <h4>{item.title}</h4>
                  <p>{item.description || 'Dolar repellendus temporibus...'}</p>
                </div>
                <a
                  href="#"
                  className="float-lg-right"
                  data-toggle="modal"
                  data-target={`#modal${item.id}-icon`}
                >
                  <i className="fas fa-arrow-right d-flex align-items-center justify-content-center"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioBody;
