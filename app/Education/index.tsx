"use client";
import React, { useState } from "react";
import { semesters } from "./SemesterData";

const Education = () => {
  const [activeSemester, setActiveSemester] = useState(semesters[0].name);

  const activeSemesterClasses = semesters.find(
    (semester) => semester.name === activeSemester
  )?.classes;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center mx-auto w-fit">
      <h2 className="font-bold text-gray-300 text-4xl flex justify-center my-10">Education</h2>
      <span className="text-start font-bold text-sm text-gray-300">2023 - 2027</span>
      <h5 className="text-start text-gray-300">B.S. in Computer Science, B.S. in Applied Mathematics — STONY BROOK UNIVERSITY</h5>
      <ul className="flex mb-3" role="tablist">
        {semesters.map((semester) => (
          <li className="datecard mr-2" key={semester.name} role="presentation">
            <button
              className={`nav-link ${
                activeSemester === semester.name ? "active" : ""
              }`}
              onClick={() => setActiveSemester(semester.name)}
              type="button"
            >
              {semester.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content text-start">
        {activeSemesterClasses?.map((classItem) => (
          <div key={classItem.courseCode} className="mb-2">
            <span className="grade inline-block w-10 px-1 mx-2 rounded bg-gray-800">{classItem.grade}</span>
            <h6 className="inline text-gray-300 mr-4">{classItem.courseName}</h6>
            <h6 className="inline text-gray-300 ">{classItem.instructor}</h6>
            <br className="clear-both" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
