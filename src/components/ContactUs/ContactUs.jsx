import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server or email)
    console.log(formData);
  };

  return (
    <section className="contact-us-page">
      <div className="contact-us-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or comments about IgboUnion, please
            contact us using the information below.
          </p>
          <div className="contact-details">
            <p>
              <strong>Address:</strong> 2120 Railroad Avenue, Suite 103-214
              Pittsburg, CA 94565 USA
            </p>
            <br />
            <p>
              <strong>Email:</strong> igbonorcal@gmail.com
            </p>
            <br />
            <p>
              <strong>Phone:</strong> 925-238-8009
            </p>
          </div>
        </div>
        <div
          className="contact-form"
          style={{ backgroundColor: "#FFECDB", padding: 24, borderRadius: 12 }}
        >
          <h3>For any Inquiry, please fill out the form</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>
            <button type="submit" className="cta-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
