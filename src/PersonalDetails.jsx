/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function PersonalDetails() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    address: "",
  });

  function handleChange(event) {
    setPersonalDetails((prevDetails) => {
      const { name, type, value } = event.target;
      return { ...prevDetails, [name]: value };
    });
  }
  return (
    <form action="">
      <fieldset>
        <legend>Personal Details</legend>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          name="firstName"
          id="first-name"
          value={personalDetails.firstName}
          placeholder="John"
          onChange={handleChange}
          autoComplete="given-name"
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="last-name"
          value={personalDetails.lastName}
          placeholder="Doe"
          onChange={handleChange}
          autoComplete="family-name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={personalDetails.email}
          placeholder="name@email.com"
          onChange={handleChange}
          autoComplete="email"
        />
        <label htmlFor="phone-num">Phone Number</label>
        <input
          type="tel"
          name="phoneNum"
          id="phone-num"
          value={personalDetails.phoneNum}
          placeholder="000-1234-5678"
          onChange={handleChange}
          autoComplete="tel"
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={personalDetails.address}
          placeholder="City, Country"
          onChange={handleChange}
          autoComplete="on"
        />
        {/* Delete console log once finished */}
        {console.log(personalDetails)};
      </fieldset>
    </form>
  );
}
