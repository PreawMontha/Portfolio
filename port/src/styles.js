const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[100px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[40px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  animatecharcter: {
    textTransform: "uppercase",
    backgroundImage:
      "linear-gradient(\n    -225deg,\n    #231557 0%,\n    #44107a 29%,\n    #ff1361 67%,\n    #fff800 100%\n  )",
    backgroundSize: ["auto auto", "200% auto"],
    backgroundClip: ["border-box", "text"],
    color: "#fff",
    textFillColor: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "textclip 2s linear infinite",
    display: "inline-block",
    fontSize: "190px",
  },
  "@keyframes textclip": { to: { backgroundPosition: "200% center" } },
};

export { styles };
