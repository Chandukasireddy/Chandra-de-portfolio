import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";

const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] object-cover drop-shadow-2xl rounded-full shadow-2xl avatar-img"
      />
      <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem] text-center max-w-[90%] font-black leading-tight">
        {language === "DE"
          ? headerIntroData.title.de
          : headerIntroData.title.en}
        <span className="wave text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem]">&#128075;&#127996;</span>
      </h1>
      <h2 className="text-[1.6rem] sm:text-[2.2rem] md:text-[3rem] text-center max-w-[90%] font-bold leading-normal">
        {headerIntroData.subtitle}
      </h2>
      <p className="w-1/2 text-center max-lg:hidden">
        {language === "DE"
          ? headerIntroData.description.de
          : headerIntroData.description.en}
      </p>

      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={language === "DE" ? button.label.de : button.label.en}
            iconSVG={button.icon}
            link={`#${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
            onClick={() => {
              setActiveSection(button.name);
              setTimeOfLastClick(Date.now());
            }}
          />
        ))}
      </div>
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
