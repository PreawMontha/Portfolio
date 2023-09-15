import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "./effect/skillsfont.css";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 m-5 p-5 ">
      <div className="content absolute inset-y-9 inset-x-60">
        <h2> Skills </h2>
        <h2> Skills </h2>
      </div>
      {technologies.map((technology) => (
        <div className="w-28 h-28  mt-10 ml-8 " key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};
/*
{technologies.map((technology) => (
        <div className="w-28 h-28  mt-10 ml-8 " key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}*/
export default SectionWrapper(Tech, "");
