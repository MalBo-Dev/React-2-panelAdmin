const ServiceItem = ({ icon, title, description, modalTarget }) => (
   <div className="col-lg-6 col-md-6">
     <div className="service-box-item" style={{ transform: 'rotate(0deg)' }}>
       <figure className="mb-0">
         <img src={icon} alt="service-icon" className="img-fluid" />
       </figure>
       <div className="service-box-item-content">
         <h4>{title}</h4>
         <p>{description}</p>
         <a href="#" data-toggle="modal" data-target={`#${modalTarget}`}>Read More</a>
       </div>
     </div>
   </div>
 );
 
 const Services = () => {
   const servicesData = [
     {
       icon: "src/assets/image/service-icon1.png",
       title: "Ui/Ux Design",
       description: "Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.",
       modalTarget: "Ui-Design"
     },
     {
       icon: "src/assets/image/service-icon2.png",
       title: "Web Design",
       description: "Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.",
       modalTarget: "web-design"
     },
     {
       icon: "src/assets/image/service-icon3.png",
       title: "Web Development",
       description: "Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.",
       modalTarget: "web-development"
     },
     {
       icon: "src/assets/image/service-icon4.png",
       title: "App Development",
       description: "Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.",
       modalTarget: "app-development"
     }
   ];
 
   return (
     <section className="w-100 float-left service-con padding-top padding-bottom position-relative" id="service-con">
       <div className="container">
         <div className="service-inner-con position-relative">
           <div className="generic-title text-center">
             <h6>My Expertise</h6>
             <h2 className="mb-0">Provide Wide Range of<br />Digital Services</h2>
           </div>
           <div className="service-box wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
             <div className="row">
               {servicesData.slice(0, 2).map((service, idx) => (
                 <ServiceItem key={idx} {...service} />
               ))}
             </div>
             <div className="row mb-0">
               {servicesData.slice(2, 4).map((service, idx) => (
                 <ServiceItem key={idx + 2} {...service} />
               ))}
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Services;
 