import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { GirlsCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full blue-green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-20 h-20 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className={`relative w-full h-screen  mx-auto`}>
      <motion.div variants={fadeIn("left", "", 0.5, 0.75)}>
        <div
          className={`absolute inset-y-0  max-auto mx-auto  flex flex-row items-start gap-5 `}
        >
          <GirlsCanvas />
        </div>
      </motion.div>
      <div className="absolute right-60 top-20">
        <motion.div variants={textVariant()} className="top-[-360px]">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
        >
          สวัสดีค่ะ ชื่อนางสาวมณฑา อ้อมงาม ตอนนี้กำลังศึกษาอยู่ที่ Kasetsart
          University สาขา วิทยาศาสตร์การคำนวนและเทคโนโลยีดิจิทัล
          มีประสบการณ์ทำโปรเจกต์ในด้าน HTML CSS JavaScript C# Flutter การเขียน
          SQL command เป็นคนเรียนรู้เร็วและชอบเรียนรู้อะไรใหม่ๆ
          กล้าที่จะลองผิดลองถูก ในขณะที่กำลังศึกษามีโอกาสได้ทำโปรเจกต์ Web
          Application รู้สึกสนุกและเกิดความสนใจ อยากศึกษาเรียนรู้เพิ่มเติม
          และอยากทำงานด้านนี้ จึงมองหาที่ฝึกงานในด้านFront-end developer
        </motion.p>
        <div className="mt-20 flex flex-wrap  gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
