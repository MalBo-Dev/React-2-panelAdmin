import React from "react";

function ContactInfoItem({ icon, title, children }) {
  return (
    <li>
      <figure className="mb-0 d-flex align-items-center justify-content-center">
        <img src={icon} alt={`${title}-icon`} className="img-fluid" />
      </figure>
      <div className="contact-information-content">
        <h5>{title}:</h5>
        {children}
      </div>
    </li>
  );
}

function InputField({ type = "text", placeholder, name, id, rows }) {
  if (type === "textarea") {
    return (
      <div className="form-group mb-0">
        <textarea
          placeholder={placeholder}
          name={name}
          id={id}
          rows={rows || 3}
          className="form-control"
        />
      </div>
    );
  }

  return (
    <div className="form-group mb-0">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className="form-control"
      />
    </div>
  );
}

function ContactForm() {
  return (
    <form
      className="contact-form wow slideInRight text-lg-left text-center"
      style={{ visibility: "visible", animationName: "slideInRight" }}
    >
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <InputField type="text" placeholder="Name" name="name" id="name" />
        </div>
        <div className="col-lg-6 col-md-6">
          <InputField type="email" placeholder="Email" name="email" id="email" />
        </div>
        <div className="col-lg-6 col-md-6">
          <InputField type="tel" placeholder="Phone" name="phone" id="phone" />
        </div>
        <div className="col-lg-6 col-md-6">
          <InputField type="text" placeholder="Subject" name="subject" id="subject" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <InputField
            type="textarea"
            placeholder="Message"
            name="comments"
            id="comments"
            rows={4}
          />
        </div>
      </div>
      <button type="submit" className="appointment-btn">
        Submit
      </button>
    </form>
  );
}

function Contact() {
  return (
    <section
      className="w-100 float-left form-main-con padding-top padding-bottom"
      id="Contact"
    >
      <div className="container">
        <div className="form-main-inner-con position-relative">
          <div className="generic-title text-center">
            <h6>Get in Touch</h6>
            <h2 className="mb-0">
              Any Questions? Feel Free
              <br />
              to Contact
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 order-lg-0 order-2">
              <div
                className="contact-information position-relative wow slideInLeft"
                style={{ visibility: "visible", animationName: "slideInLeft" }}
              >
                <ul className="list-unstyled">
                  <ContactInfoItem
                    icon="src/assets/image/location-icon.png"
                    title="Address"
                  >
                    <p className="mb-0">121 King Street Melbourne, 3000, Australia</p>
                  </ContactInfoItem>
                  <ContactInfoItem
                    icon="src/assets/image/message-icon.png"
                    title="Email"
                  >
                    <p className="mb-0">Info@folioflix.com</p>
                    <p className="mb-0">folioflix@gmail.com</p>
                  </ContactInfoItem>
                  <ContactInfoItem
                    icon="src/assets/image/phone-icon.png"
                    title="Phone"
                  >
                    <p className="mb-0">+61 3 8376 6284</p>
                    <p className="mb-0">+800 2345 6789</p>
                  </ContactInfoItem>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
