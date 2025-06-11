export interface ClassElement {
    courseCode: string;
    courseName: string;
    instructor: string;
    grade: string;
  }
  
  export interface Semester {
    name: string;
    classes: ClassElement[];
  }
  
  export const semesters: Semester[] = [
    {
        name: "Fall 2023",
        classes: [
            {
                courseCode: "AMS 161",
                courseName: "Applied Calculus II",
                instructor: "William Bernhard",
                grade: "A"
            }
        ],
    },
    {
        name: "Spring 2024",
        classes: [
            {
                courseCode: "CSE 114",
                courseName: "Intro to Object-Oriented Programming",
                instructor: "Paul Fodor",
                grade: "A"
            },
            {
                courseCode: "AMS 210",
                courseName: "Applied Linear Algebra",
                instructor: "Hyunkyung Lim",
                grade: "A"
            },
            {
                courseCode: "AMS 261",
                courseName: "Applied Calculus III",
                instructor: "Matthew Reuter",
                grade: "A"
            }
        ],
    },
    {
        name: "Fall 2024",
        classes: [
            {
                courseCode: "CSE 214",
                courseName: "Data Structures",
                instructor: "Ahmad Esmaili",
                grade: "A-"
            },
            {
                courseCode: "AMS 301",
                courseName: "Finite Mathematical Structures",
                instructor: "Evangelos Coutsias",
                grade: "A"
            },
            {
                courseCode: "AMS 310",
                courseName: "Survey of Probability and Statistics",
                instructor: "Matthew Reuter",
                grade: "A"
            },
            {
                courseCode: "AMS 361",
                courseName: "Differential Equations",
                instructor: "Iordan Michev",
                grade: "A"
            },
        ],
    },
    {
        name: "Spring 2025",
        classes: [
            {
                courseCode: "CSE 216",
                courseName: "Programming Abstractions",
                instructor: "Ritwik Banerjee",
                grade: "B+"
            },
            {
                courseCode: "CSE 220",
                courseName: "Systems Fundamentals I",
                instructor: "Daniel Benz",
                grade: "A"
            },
            {
                courseCode: "CSE 303",
                courseName: "Theory of Computation",
                instructor: "Omkant Pandey",
                grade: "A"
            },
            {
                courseCode: "CSE 385",
                courseName: "Analysis of Algorithms: Honors",
                instructor: "Michael Bender",
                grade: "A-"
            },
        ],
    },
    {
        name: "Fall 2025",
        classes: [
            {
                courseCode: "CSE 316",
                courseName: "Software Development",
                instructor: "Richard McKenna",
                grade: " "
            },
            {
                courseCode: "CSE 320",
                courseName: "Systems Fundamentals II",
                instructor: "Eugene Stark",
                grade: " "
            },
            {
                courseCode: "CSE 310",
                courseName: "Computer Networks",
                instructor: "Aruna Balasubramanian",
                grade: " "
            },
            {
                courseCode: "CSE 385",
                courseName: "Analysis of Algorithms: Honors",
                instructor: "Michael Bender",
                grade: " "
            },
        ],
    },
  ];
  