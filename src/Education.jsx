import { useState } from "react";

export default function Education() {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    major: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setEducation((prevEducation) => {
      return { ...prevEducation, [name]: value };
    });
  }
  return (
    <fieldset>
      <legend>Education</legend>
      <label htmlFor="school">School</label>
      <input
        type="text"
        name="school"
        id="school"
        placeholder="University of Yourtown"
        value={education.school}
        onChange={handleChange}
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        name="degree"
        id="degree"
        placeholder="Bachelor of Arts"
        value={education.degree}
        onChange={handleChange}
      />
      <label htmlFor="major">Major(s)</label>
      <input
        type="text"
        name="major"
        id="major"
        placeholder="History"
        value={education.major}
        onChange={handleChange}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={education.startDate}
        onChange={handleChange}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={education.endDate}
        onChange={handleChange}
      />
      <label htmlFor="eduLocation">Location</label>
      <input
        type="text"
        name="location"
        id="eduLocation"
        placeholder="City, Country"
        value={education.location}
        onChange={handleChange}
      />
    </fieldset>
  );
}
