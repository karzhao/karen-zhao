"use client";
import React, { useState } from "react";
import { semesters } from "./SemesterData";
import { DiVim } from "react-icons/di";

const Education = () => {
  const [activeSemester, setActiveSemester] = useState(semesters[0].name);

  const activeSemesterClasses = semesters.find(
    (semester) => semester.name === activeSemester
  )?.classes;

  return (
    <div>
      <h1 className="font-bold text-gray-300 text-4xl flex justify-center my-10">
        Education
      </h1>
      <div className=" flex-col items-center text-center justify-center mb-5">
        <p className="font-bold text-gray-300 text-lg">Stony Brook University</p>
        <p className="font-bold text-gray-300 text-lg">B.S. in Computer Science, B.S. in Applied Mathematics</p>
        <p className="text-gray-300 text-sm">Expected 2027</p>
      </div>

      <ul className="flex mb-3" role="tablist">
        {semesters.map((semester) => (
          <li key={semester.name} role="presentation">
            <button
              className={`px-4 py-2 rounded transition-colors duration-200
                ${activeSemester === semester.name 
                  ? 'bg-gray-200 text-gray-800' 
                  : 'bg-transparent text-gray-400 hover:text-gray-600'
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
            <h6
              className={`inline mr-4 ${colorMap[classItem.courseCode.slice(0, 3)] || "text-gray-200"
                }`}
            >
              {classItem.courseCode}
            </h6>
            <h6 className="inline text-gray-300 mr-4">{classItem.courseName}</h6>
            <h6 className="inline text-gray-300 ">{classItem.instructor}</h6>
            <br className="clear-both" />
          </div>
        ))}
      </div>
    </div>
  );
};
const colorMap: Record<string, string> = {
  CSE: "text-lime-600",
  AMS: "text-cyan-600",
};
export default Education;
