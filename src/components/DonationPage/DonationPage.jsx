import React, { useState } from "react";
import "./DonationPage.css";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState(50); // Default to 50€
  const [customAmount, setCustomAmount] = useState("");
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleDonationAmountChange = (amount) => {
    setDonationAmount(amount);
    setCustomAmount(""); // Clear custom amount when a preset option is chosen
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount(e.target.value); // Update donation amount with custom value
  };

  const handlePersonalInfoChange = (e) => {
    const { id, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the donation submission logic here
    console.log("Donation Submitted: ", donationAmount, personalInfo);
  };

  return (
    <section className="donation-page">
      <div className="donation-container">
        <h2>Make a Donation</h2>
        <p>
          To make offline donations to the Oyede Community Cultural Heritage
          Center, please fill out the form and state the amount you are paying.
          You can donate by mail, Zelle, or direct deposit.
        </p>

        <div className="donation-options">
          <h3>Select Your Donation Amount</h3>
          <div className="amount-buttons">
            <button onClick={() => handleDonationAmountChange(50)}>50€</button>
            <button onClick={() => handleDonationAmountChange(100)}>
              100€
            </button>
            <button onClick={() => handleDonationAmountChange(200)}>
              200€
            </button>
            <button onClick={() => handleDonationAmountChange(500)}>
              500€
            </button>
            <button onClick={() => handleDonationAmountChange(1000)}>
              1000€
            </button>
          </div>

          <div
            style={{
              flexDirection: "row",
              gap: 6,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="custom-amount">
              <label htmlFor="customAmount">Custom Amount (EUR):</label>
              <input
                type="number"
                id="customAmount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Enter custom amount"
              />
            </div>

            <div className="personal-info">
              <h3>Personal Info</h3>
              <div className="form-row">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  value={personalInfo.firstName}
                  onChange={handlePersonalInfoChange}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-row">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={personalInfo.lastName}
                  onChange={handlePersonalInfoChange}
                  placeholder="Enter your last name"
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          <br />
          <div className="donation-instructions">
            <h3>Bank Details</h3>
            <p>
              To make offline donations, please use the following bank details:
            </p>
            <ul style={{ marginTop: 24 }}>
              <li style={{ lineHeight: 2 }}>
                <strong>Name:</strong> Oyede Progressive Union
              </li>
              <li style={{ lineHeight: 2 }}>
                <strong>Bank:</strong> LLOYDS Bank
              </li>
              <li style={{ lineHeight: 2 }}>
                <strong>Account No:</strong> 02907682
              </li>
              <li style={{ lineHeight: 2 }}>
                <strong>Sort Code:</strong> 30.95.74
              </li>
              <li style={{ lineHeight: 2 }}>
                <strong>BIC:</strong> LOYDGB21027
              </li>
              <li style={{ lineHeight: 2 }}>
                <strong>IBAN:</strong> GB88LOYD30957402907682
              </li>
            </ul>
            <p>Your tax-deductible donation is greatly appreciated!</p>
          </div>

          <div className="donation-total">
            <h3>Donation Total: {donationAmount}€</h3>
            <button onClick={handleSubmit} className="cta-button">
              Submit Donation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationPage;