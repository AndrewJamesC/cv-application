/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "./Form";
import PreviewCv from "./PreviewCv";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    address: "",
  });

  function handlePersonalChange(event) {
    setPersonalDetails((prevDetails) => {
      const { name, value } = event.target;
      return { ...prevDetails, [name]: value };
    });
  }
  return (
    <>
      <Form
        personalDetails={personalDetails}
        handlePersonalChange={handlePersonalChange}
      />
      <PreviewCv />
    </>
  );
}

export default App;
