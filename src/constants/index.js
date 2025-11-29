import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  githubimg,
  python,
  java,
  mysql,
  nodejs,
  mongodb,
  git,
  roomrental,
  jobit,
  tripguide,
  prodigy,
  shadowfox,
  stock,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: githubimg,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Prodigy Infotech",
    icon: prodigy,
    iconBg: "#383E56",
    date: "January 2025 - Feburary 2025",
    points: [
      " Successfully developed and deployed four full-stack web applications, integrating front-end and back-end technologies for dynamic and interactive user experiences.",
      " Designed and implemented features including user authentication, real-time data processing, and database management using React.js, Node.js, Express.js, and MongoDB.",
      " Optimized website performance, ensuring responsive design, faster load times, and secure API endpoints to enhance user engagement.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "ShadowFox",
    icon: shadowfox,
    iconBg: "#E6DEDD",
    date: "December 2024 - January 2025",
    points: [
      " Contributed to the development of an E-Commerce website, integrating front-end and back-end technologiesfor a dynamic online shopping experience.",
      " Implemented product search, interactive shopping cart, and dynamic content rendering for seamless user interaction.",
      " Focused on optimizing website performance and enhancing user experience through responsive design and efficient database management",
    ],
  },
];

const projects = [
  {
    name: "Room Rental Website",
    description:
      " • Designed and implemented a rental platform enabling users to list and rent rooms seamlessly  • Applied MVC architecture for scalable and maintainable code structure.• Enhanced user experience with a responsive UI and intuitive navigation.",
    tags: [
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: roomrental,
    source_code_link: "https://github.com/Ayush1Rajput/Room_Rental_website",
  },
  {
    name: "Stock Trading Platform",
    description:
      " Developed a full-stack stock trading platform inspired by Zerodha with features like user authentication, live stock price tracking via APIs, portfolio management, order placement, and transaction history using React.js, Node.js, Express.js, and MongoDB/MySQL.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "white-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/Ayush1Rajput/Stock-Trading-Platform",
  },
  {
    name: "Compatative Study Hub",
    description:
      " Developed a comprehensive study platform with course material, interactive quizzes, and collaborative note-taking. Increased user engagement by 15% through personalized recommendations.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "white-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ayush1Rajput/JOVAC_Project",
  },
  {
    name: "E-Commerce Website",
    description:
      " Developed a Local Store E-commerce Platform enabling seamless product browsing, shopping cart functionality, and secure checkout with JWT authentication. • Implemented an Admin Panel for store owners to manage products directly from the web page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "white-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/Ayush1Rajput/Prodigy_Infotech_Project/tree/main/PRODIGY_FSWD_03",
  },
];

export { services, technologies, experiences, projects };
