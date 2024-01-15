/* eslint-disable react/prop-types */

export default function PersonalDetails(props) {
  return (
    <fieldset>
      <p className="fieldset-title">Personal Details</p>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        name="firstName"
        id="first-name"
        value={props.personalDetails.firstName}
        placeholder="John"
        onChange={(event) => props.handlePersonalChange(event)}
        autoComplete="given-name"
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="last-name"
        value={props.personalDetails.lastName}
        placeholder="Doe"
        onChange={(event) => props.handlePersonalChange(event)}
        autoComplete="family-name"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={props.personalDetails.email}
        placeholder="name@email.com"
        onChange={(event) => props.handlePersonalChange(event)}
        autoComplete="email"
      />
      <label htmlFor="phone-num">Phone Number</label>
      <input
        type="tel"
        name="phoneNum"
        id="phone-num"
        value={props.personalDetails.phoneNum}
        placeholder="000-1234-5678"
        onChange={(event) => props.handlePersonalChange(event)}
        autoComplete="tel"
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        value={props.personalDetails.address}
        placeholder="City, Country"
        onChange={(event) => props.handlePersonalChange(event)}
        autoComplete="on"
      />
    </fieldset>
  );
}
