import React from "react";
import EducationExp from "./EducationExp.js";
import "./Education.css";

export default function Education() {
  return (
    <div className="eduQulification">
      <div className="eduLable">
        <label htmlFor="edu">Qualifications, Experience & Interests</label>
      </div>
      <div className="education">
        <EducationExp />
      </div>
      </div>
  );
}
