import {
  app,
  designer,
  development,
  settings,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  figma,
  starbucks,
  tesla,
  shopify,
  Dora,
  Firebase,
  flutter,
  spline,
  mysql,
  Bootstrap,
  Oracle,
  c1,
  Python,
  tree,
  Chim,
  plant,
  trip,
  book,
  frog,
  full,
  gib,
  strang,
  model1,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const linkskills = [
  {
    id: "language",
    title: "Computer Languages",
  },
  {
    id: "tool",
    title: "Tools",
  },
  {
    id: "program",
    title: "Programs",
  },
];

const services = [
  {
    title: "Web Application",
    icon: development,
  },
  {
    title: "Mobile Application",
    icon: app,
  },
  {
    title: "Program",
    icon: settings,
  },
  {
    title: "Design",
    icon: designer,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "Dora",
    icon: Dora,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Spline",
    icon: spline,
  },
  {
    name: "Oracle",
    icon: Oracle,
  },
  {
    name: "C#",
    icon: c1,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Computer Programming",
    project_name: "Tripplegurll",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2021 - October 2021",
    points: [
      "ทำโปรเจกต์โปรแกรมร้านเสื้อผ้าโดยใช้ภาษา C# กับโปรแกรม Visual Studio",
    ],
  },
  {
    title: "React.js Developer",
    project_name: "Stranger Things Characters",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2021 - March 2021",
    points: [
      "ได้ทำโปรเจกต์โดยใช้ภาษา Javascript ร่วมกับ Bootstrap และ React เป็นโปเจกต์เว็บตัวละครในซีรีส์ ด้วยโปรแกรม Visual Studio Code ",
    ],
  },
  {
    title: "Object Oriented Programming",
    project_name: "Model shop",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - March 2021",
    points: [
      "ทำโปรเจกต์โปรแกรมเช็คสต๊อกโมเดลสินค้าโดยใช้ภาษา C# กับโปรแกรม Visual Studio ต่อฐานข้อมูลสินค้าด้วย SQL",
    ],
  },
  {
    title: "Web Application",
    project_name: "Book Store",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2022 - October 2022",
    points: [
      "โปรเจกต์เว็บขายหนังสือโดยใช้ภาษา C# ด้วยโปรแกรม Visual Studio  ติดต่อฐานข้อมูลด้วย SQL",
    ],
  },
  {
    title: "Mobile Application",
    project_name: "Huge_plant",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - March 2022",
    points: [
      "ทำโปรเจกต์โปรแกรมเช็คสต๊อกโมเดลสินค้าโดยใช้ภาษา C# กับโปรแกรม Visual Studio",
    ],
  },
];

const projects = [
  {
    name: "Stranger Things",
    description:
      "สร้าง Web Application แสดงข้อมูลตัวละครจากซีรีส์ Stranger Things สามารถลบ แก้ไข หรือเพิ่มข้อมูลได้",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
    ],
    image: strang,
    source_code_link: "https://github.com/PreawMontha/StrangerThings.git",
  },
  {
    name: "Huge Plant",
    description:
      "สร้าง Application ค้นหาข้อมูลต้นไม้หลายสายพันธ์ โดยดึงข้อมูลจาก Firebase และนำมาให้ผู้ใช้ Search ข้อมูล",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: plant,
    source_code_link: "https://github.com/PreawMontha/huge_plant.git",
  },
  {
    name: "Tripple gurll",
    description:
      "โปรแกรมขายเสื้อผ้าด้วยภาษา C# เชื่อมต่อฐานข้อมูลด้วย phpMyAdmin",
    tags: [
      {
        name: "C",
        color: "orange-text-gradient",
      },
    ],
    image: trip,
    source_code_link: "https://github.com/PreawMontha/Tripplegurll.git",
  },
  {
    name: "Book Store",
    description:
      "โปรแกรมแสดงข้อมูลด้วยภาษา C# เชื่อมต่อฐานข้อมูลด้วย phpMyAdmin",
    tags: [
      {
        name: "C",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/PreawMontha/Book-Store.git",
  },
  {
    name: "Product stock check program",
    description:
      "โปรแกรมเช็คสต๊อกโมเดลในร้านค้า ด้วยภาษา C# ด้วยโปรแกรม Netbeans IDE เชื่อมต่อฐานข้อมูลด้วย phpMyAdmin สามารถเพิ่ม ลบ แก้ไข และเช็คสต๊อกสินค้าที่มีในร้านได้ทั้งหมด",
    tags: [
      {
        name: "C#",
        color: "orange-text-gradient",
      },
    ],
    image: model1,
  },
  {
    name: "Chim Chim",
    description: "ออกแบบ Application คำนวนแคลอรีอาหารด้วยโปรแกรม Figma",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "design",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: Chim,
    source_code_link:
      "https://www.figma.com/file/JXQ6u8ZnsG2zSmPNJfSYg5/Chim-Chim?type=design&node-id=0%3A1&mode=design&t=xBBPMj6JHVvk8o5I-1",
  },
  {
    name: "Frog Model",
    description: "สร้าง 3D Models ด้วยโปรแกรม Spline",
    tags: [
      {
        name: "3D",
        color: "blue-text-gradient",
      },
      {
        name: "Spline",
        color: "pink-text-gradient",
      },
    ],
    image: frog,
    source_code_link:
      "https://app.spline.design/file/c4fcd8fe-be61-4911-ae03-0683d1e2cbdf",
  },
  {
    name: "Wallpaper Model",
    description: "สร้าง 3D Models ด้วยโปรแกรม Spline",
    tags: [
      {
        name: "3D",
        color: "blue-text-gradient",
      },
      {
        name: "Spline",
        color: "pink-text-gradient",
      },
    ],
    image: full,
    source_code_link:
      "https://app.spline.design/file/f777b30f-0c42-4d41-b276-709b2001cea6",
  },
  {
    name: "Kaonashi Model",
    description: "สร้าง 3D Models ด้วยโปรแกรม Spline",
    tags: [
      {
        name: "3D",
        color: "blue-text-gradient",
      },
      {
        name: "Spline",
        color: "pink-text-gradient",
      },
    ],
    image: gib,
    source_code_link:
      "https://app.spline.design/file/6d7a8058-1e21-4244-8115-b18d4547f6fc",
  },
];

export { services, technologies, experiences, projects };
