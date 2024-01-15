/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Experience(props) {
  // const [experience, setExperience] = useState([
  //   {
  //     companyName: "",
  //     title: "",
  //     start: "",
  //     end: "",
  //     location: "",
  //     description: "",
  //     id: uuid(),
  //   },
  // ]);

  // function addExperience() {
  //   setExperience((prevExp) => {
  //     return [
  //       ...prevExp,
  //       {
  //         companyName: "",
  //         title: "",
  //         start: "",
  //         end: "",
  //         location: "",
  //         description: "",
  //         id: uuid(),
  //       },
  //     ];
  //   });
  // }

  // function handleChange(event, id) {
  //   const { name, value } = event.target;
  //   setExperience((prevExp) =>
  //     prevExp.map((exp) => (exp.id === id ? { ...exp, [name]: value } : exp)),
  //   );

  //   // const { name, value, defaultValue } = event.target;
  //   // const newExp = [...experience];
  //   // if (name !== "description") {
  //   //   setExperience((prevExp) => {
  //   //     const newExp = [...prevExp];
  //   //     newExp[index][name] = value;
  //   //     return newExp;
  //   //   });
  //   // } else {
  //   //   newExp[index][name] = defaultValue;
  //   //   setExperience(newExp);
  //   // }
  // }
  return (
    <fieldset>
      {props.experience.map((eduObj) => {
        const { companyName, title, start, end, location, description, id } =
          eduObj;
        return (
          <div key={id}>
            <label htmlFor="companyName">Company Name</label>
            <input
              key={`companyName-${id}`}
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Enter company name"
              value={companyName}
              onChange={(event) => props.handleExperienceChange(event, id)}
            />
            <label htmlFor="title">Position Title</label>
            <input
              key={`title-${id}`}
              type="text"
              name="title"
              id="title"
              placeholder="Enter position title"
              value={title}
              onChange={(event) => props.handleExperienceChange(event, id)}
            />
            <label htmlFor="start">Start Date</label>
            <input
              key={`start-${id}`}
              type="date"
              name="start"
              id="start"
              value={start}
              onChange={(event) => props.handleExperienceChange(event, id)}
            />
            <label htmlFor="end">End Date</label>
            <input
              key={`end-${id}`}
              type="date"
              name="end"
              id="end"
              value={end}
              onChange={(event) => props.handleExperienceChange(event, id)}
            />
            <label htmlFor="jobLocation">Location</label>
            <input
              key={`jobLocation-${id}`}
              type="text"
              name="location"
              id="jobLocation"
              value={location}
              onChange={(event) => props.handleExperienceChange(event, id)}
              placeholder="Enter Location"
            />
            <label htmlFor="jobDescription">Description</label>
            <textarea
              key={`jobDescription-${id}`}
              name="description"
              id="jobDescription"
              value={description}
              placeholder="Enter Description"
              onChange={(event) => props.handleExperienceChange(event, id)}
            ></textarea>
          </div>
        );
      })}

      <button type="button" onClick={(event) => props.addExperience(event)}>
        Add Work Experience
      </button>
    </fieldset>
  );
}
