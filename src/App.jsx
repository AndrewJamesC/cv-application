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

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    major: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  function handlePersonalChange(event) {
    setPersonalDetails((prevDetails) => {
      const { name, value } = event.target;
      return { ...prevDetails, [name]: value };
    });
  }

  function handleEducationChange(event) {
    const { name, value } = event.target;

    setEducation((prevEducation) => {
      return { ...prevEducation, [name]: value };
    });
  }
  return (
    <>
      <Form
        personalDetails={personalDetails}
        handlePersonalChange={handlePersonalChange}
        education={education}
        handleEducationChange={handleEducationChange}
      />
      <PreviewCv />
    </>
  );
}

export default App;
