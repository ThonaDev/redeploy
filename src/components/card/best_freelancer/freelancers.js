import Thona from "../../../assets/Thona.jpg";
import Sunnich from "../../../assets/Sunnich.jpg";

export const freelancers = [
  {
    id: 1,
    name: "Ben Thona",
    role: "Full-Stack Developer",
    rate: 190,
    location: "Phnom Penh, PP",
    tags: ["Web", "Mobile", "PHP"],
    avatar: Thona,
    verified: true,
    roleColor: "bg-blue-100 text-blue-800",
    birth: "14 June, 2000",
    gender: "Male",
    website: "www.jobcollap.com",
    phone: "096 6666 7777",
    email: "jobcollap@gmail.com",
    bio: `I've been passionate about programming and building things from an early age,
    with a keen interest in both the user-facing and server-side aspects of web applications.
    My expertise lies in the MERN stack (MongoDB, Express.js, React, Node.js).`,
  },
  {
    id: 2,
    name: "Phorn Sunnich",
    role: "Product Designer",
    rate: 170,
    location: "Phnom Penh, PP",
    tags: ["Web", "Figma", "Wireframing"],
    avatar: Sunnich,
    verified: true,
    roleColor: "bg-purple-100 text-purple-800",
    birth: "23 December, 1999",
    gender: "Female",
    website: "www.designcollap.com",
    phone: "097 1234 5678",
    email: "sunnich.design@gmail.com",
    bio: `As a passionate product designer, I specialize in creating clean, user-friendly,
    and visually appealing interfaces. My focus is on understanding user behavior
    to deliver functional and delightful designs.`,
  },
];
