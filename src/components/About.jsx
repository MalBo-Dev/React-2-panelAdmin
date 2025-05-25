import React from 'react';

const SkillItem = ({ label, percent, circleClass, itemClass }) => (
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="skill-left-item-con">
      <div className={`circle-wrap ${circleClass}`}>
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle">
            <div className="service-skill-sttaf-item-con">
              <div className={`service-skill-sttaf-item-title ${itemClass} d-flex align-items-center justify-content-center`}>
                <h4 className="mb-0 text-center count">{percent}</h4>
                <span className="static-txt2">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-skill-sttaf-item-heading">
        <p className="mb-0">{label}</p>
      </div>
    </div>
  </div>
);

const About = () => {
  const skills = [
    { label: "Graphic Design", percent: 75, circleClass: "firstPercentage", itemClass: "service-skill-sttaf-item1-con" },
    { label: "Web Designing", percent: 95, circleClass: "secondPercentage", itemClass: "service-skill-sttaf-item2-con" },
    { label: "Branding Design", percent: 85, circleClass: "thirdPercentage", itemClass: "service-skill-sttaf-item1-con" },
    { label: "Web Development", percent: 80, circleClass: "fourPercentage", itemClass: "service-skill-sttaf-item2-con" },
  ];

  const splitSkills = [];
  for (let i = 0; i < skills.length; i += 2) {
    splitSkills.push(skills.slice(i, i + 2));
  }

  return (
    <section className="w-100 float-left skill-con padding-top padding-bottom position-relative" id="about-con">
      <div className="container">
        <div className="skill-inner-con position-relative">
          <div className="row">

            <div className="col-lg-6 order-lg-0 order-2">
              <div className="skill-left-con text-center wow slideInLeft" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                {splitSkills.map((skillPair, rowIndex) => (
                  <div className="row service-skill-sttaf-con" key={rowIndex}>
                    {skillPair.map((skill, index) => (
                      <SkillItem key={index} {...skill} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center">
              <div className="skill-right-con wow slideInRight" style={{ visibility: 'visible', animationName: 'slideInRight' }}>
                <h6>My Skills</h6>
                <h2>Beautiful &amp; Unique Digital Experiences</h2>
                <p>
                  Nostrum exercitationem ullam corporis suscipit laborioa nisi ut aliquid exrea commodi consequatur magni dolores
                  aos qui ratione voluptatem nesciunt.
                </p>
                <p>
                  Quia voluptas sit aspernatur aut odit aut fugit, sed ruiano consequntar magni dolores.
                </p>
                <div className="generic-btn download-bnt">
                  <a href="#" id="downloadImg">Download CV</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
