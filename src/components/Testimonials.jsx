const Testimonials = () => (
   <section className="w-100 float-left padding-top padding-bottom tastimonials-con position-relative text-lg-left text-center" id="testimonials">
   <div className="container">
      <div className="row">
         <div className="col-lg-5">
            <div className="tastimonials-left-con wow slideInLeft" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
               <figure className="mb-0">
                  <img src="src/assets/image/tastimonials-img.png" alt="tastimonials-img" className="img-fluid" />
               </figure>
            </div>
         </div>
         <div className="col-lg-7">
            <div id="carouselExampleControls" className="carousel slide wow slideInRight" data-ride="carousel" style={{ visibility: 'visible', animationName: 'slideInRight' }}>
               <div className="carousel-inner">
                  <div className="carousel-item">
                     <div className="testimonials-content">
                        <h6>Testimonials</h6>
                        <h2>Happy Clients Feedback</h2>
                        <figure className="mb-0">
                           <img src="src/assets/image/comma-icon.png" alt="comma-icon" className="img-fluid" />
                        </figure>
                        <div className="testimonials-inner-content">
                           <p>Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
                              aeci velit, sed quia non numquam eius modi tempora incidunt ut lao
                              magnam aliquam quaerat voluptatem reprehenderit in voluptate
                              cillum dolore eu fugiat nulla pariatur maxime...
                           </p>
                           <span className="d-block auther-name">Kevin Andrew</span>
                           <span className="d-block">CEO  of the company</span>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="testimonials-content">
                        <h6>Testimonials</h6>
                        <h2>Happy Clients Feedback</h2>
                        <figure className="mb-0">
                           <img src="src/assets/image/comma-icon.png" alt="comma-icon" className="img-fluid" />
                        </figure>
                        <div className="testimonials-inner-content">
                           <p>Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
                              aeci velit, sed quia non numquam eius modi tempora incidunt ut lao
                              magnam aliquam quaerat voluptatem reprehenderit in voluptate
                              cillum dolore eu fugiat nulla pariatur maxime...
                           </p>
                           <span className="d-block auther-name">Kevin Andrew</span>
                           <span className="d-block">CEO  of the company</span>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item active">
                     <div className="testimonials-content">
                        <h6>Testimonials</h6>
                        <h2>Happy Clients Feedback</h2>
                        <figure className="mb-0">
                           <img src="src/assets/image/comma-icon.png" alt="comma-icon" className="img-fluid" />
                        </figure>
                        <div className="testimonials-inner-content">
                           <p>Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
                              aeci velit, sed quia non numquam eius modi tempora incidunt ut lao
                              magnam aliquam quaerat voluptatem reprehenderit in voluptate
                              cillum dolore eu fugiat nulla pariatur maxime...
                           </p>
                           <span className="d-block auther-name">Kevin Andrew</span>
                           <span className="d-block">CEO  of the company</span>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
               <i className="fas fa-arrow-left d-flex align-items-center justify-content-center"></i>
               <span className="sr-only">Previous</span>
               </a>
               <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
               <i className="fas fa-arrow-right d-flex align-items-center justify-content-center"></i>
               <span className="sr-only">Next</span>
               </a>
            </div>
         </div>
      </div>
   </div>
</section>
  );
  
  export default Testimonials;
  