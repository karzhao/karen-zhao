"use client";
import React, { useState } from "react";
import { semesters } from "./SemesterData";

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
        <p className="font-bold text-gray-300 text-base">Stony Brook University</p>
        <p className="font-bold text-gray-300 text-base">B.S. in Computer Science</p>
        <p className="font-bold text-gray-300 text-base">B.S. in Applied Mathematics and Statistics</p>
        <p className="text-gray-300 text-sm">GPA: 3.85</p>
        <p className="text-gray-300 text-sm">Expected Graduation: May 2027</p>
      </div>

      <ul className="flex justify-center mb-3" role="tablist">
        {semesters.map((semester) => (
          <li key={semester.name} role="presentation">
            <button
              className={`px-4 py-2 rounded transition-colors duration-200
                ${activeSemester === semester.name
                  ? 'bg-sky-600 text-sky-50'
                  : 'bg-transparent text-sky-500 hover:text-sky-600'
                }`}
              onClick={() => setActiveSemester(semester.name)}
              type="button"
            >
              {semester.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <table className="w-fit table-auto">
          <thead>
            <tr>
              <th className="text-gray-300 text-left px-4 ">Grade</th>
              <th className="text-gray-300 text-left px-4">Course Code</th>
              <th className="text-gray-300 text-left px-4">Course Name</th>
              <th className="text-gray-300 text-left px-4">Instructor</th>
            </tr>
          </thead>
          <tbody>
            {activeSemesterClasses?.map((classItem) => (
              <tr key={classItem.courseCode} className="border-b-2 border-emerald-800">
              <td className="px-4 py-3">
                <span className="text-lg inline-block w-10 px-1 rounded bg-slate-200 text-grey-800 text-center">
                  {classItem.grade}
                </span>
              </td>
              <td className="text-lg px-4">
                <span className={`${colorMap[classItem.courseCode.slice(0, 3)] || "text-lg text-gray-200"}`}>
                  {classItem.courseCode}
                </span>
              </td>
              <td className="px-4 text-gray-400 text-lg">{classItem.courseName}</td>
              <td className="px-4 text-gray-400 text-lg">{classItem.instructor}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const colorMap: Record<string, string> = {
  CSE: "text-indigo-400",
  AMS: "text-blue-400",
};
export default Education;
