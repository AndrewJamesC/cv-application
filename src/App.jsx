/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "./Form";
import PreviewCv from "./PreviewCv";
import { v4 as uuid } from "uuid";

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

  const [experience, setExperience] = useState([
    {
      companyName: "",
      title: "",
      start: "",
      end: "",
      location: "",
      description: "",
      id: uuid(),
    },
  ]);

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

  function handleExperienceChange(event, id) {
    const { name, value, type } = event.target;
    setExperience((prevExp) =>
      prevExp.map((exp) => (exp.id === id ? { ...exp, [name]: value } : exp)),
    );
  }

  function addExperience() {
    setExperience((prevExp) => {
      return [
        ...prevExp,
        {
          companyName: "",
          title: "",
          start: "",
          end: "",
          location: "",
          description: "",
          id: uuid(),
        },
      ];
    });
  }
  return (
    <>
      <Form
        personalDetails={personalDetails}
        handlePersonalChange={handlePersonalChange}
        education={education}
        handleEducationChange={handleEducationChange}
        experience={experience}
        handleExperienceChange={handleExperienceChange}
        addExperience={addExperience}
      />
      <PreviewCv
        personalDetails={personalDetails}
        education={education}
        experience={experience}
      />
    </>
  );
}

export default App;
