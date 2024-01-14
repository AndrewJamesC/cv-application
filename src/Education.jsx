/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Education(props) {
  return (
    <fieldset>
      <legend>Education</legend>
      <label htmlFor="school">School</label>
      <input
        type="text"
        name="school"
        id="school"
        placeholder="University of Yourtown"
        value={props.education.school}
        onChange={(event) => props.handleEducationChange(event)}
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        name="degree"
        id="degree"
        placeholder="Bachelor of Arts"
        value={props.education.degree}
        onChange={(event) => props.handleEducationChange(event)}
      />
      <label htmlFor="major">Major(s)</label>
      <input
        type="text"
        name="major"
        id="major"
        placeholder="History"
        value={props.education.major}
        onChange={(event) => props.handleEducationChange(event)}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={props.education.startDate}
        onChange={(event) => props.handleEducationChange(event)}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={props.education.endDate}
        onChange={(event) => props.handleEducationChange(event)}
      />
      <label htmlFor="eduLocation">Location</label>
      <input
        type="text"
        name="location"
        id="eduLocation"
        placeholder="City, Country"
        value={props.education.location}
        onChange={(event) => props.handleEducationChange(event)}
      />
    </fieldset>
  );
}
