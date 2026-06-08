import React, { useRef, useState } from "react";
import me from "../assets/img/me.webp";
import { aboutMeData, resumeData } from "../assets/lib/data";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";

type TabType = "story" | "experience" | "education" | "responsibilities" | "achievements" | "languages";

const AboutMe: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const { ref } = useSectionInView("About me");
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<TabType>("story");

  const animationReference = useRef<HTMLDivElement>(null);

  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  const paragraphs =
    language === "DE" ? aboutMeData.paragraphs_DE : aboutMeData.paragraphs_EN;

  const tabs = [
    { id: "story", label: language === "DE" ? "Persönliche Story" : "Personal Story" },
    { id: "experience", label: language === "DE" ? "Berufserfahrung" : "Work Experience" },
    { id: "education", label: language === "DE" ? "Ausbildung" : "Education" },
    { id: "responsibilities", label: language === "DE" ? "Führungsrollen" : "Leadership" },
    { id: "achievements", label: language === "DE" ? "Zertifikate & Publikationen" : "Awards & Publications" },
    { id: "languages", label: language === "DE" ? "Sprachen" : "Languages" },
  ] as const;

  const currentLangKey = language.toLowerCase() as "en" | "de";

  return (
    <React.Fragment>
      <section className="about-me relative mt-16 " id="about-me" ref={ref}>
        <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start">
          <motion.div
            ref={animationReference}
            style={{
              textAlign: "left",
            }}
          >
            <p className={`${theme === "dark" ? "text-white" : "text-[--black]"} mb-6`}>
              <span className="text-orange">&lt;</span>
              {language === "DE" ? aboutMeData.title : aboutMeData.title_EN}
              <span className="text-orange">/&gt;</span>
            </p>

            <h2 className={`${theme === "dark" ? "text-white" : "text-[--black]"} text-center max-lg:text-left break-words`}>
              {language === "DE"
                ? aboutMeData.description
                : aboutMeData.description_EN}
            </h2>
          </motion.div>
        </div>

        {/* Custom Tab Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-white/5 pb-8 max-w-[1200px] mx-auto px-4 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-6 rounded-full text-[1.4rem] font-black transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-orange text-white shadow-lg shadow-orange-500/20 scale-105"
                  : theme === "dark"
                  ? "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  : "bg-black/5 text-black/60 hover:bg-black/10 hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display Area with Transitions */}
        <div className="max-w-[1200px] mx-auto px-6 pb-16 min-[1921px]:px-[10rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Tab 1: Personal Story Swiper */}
              {activeTab === "story" && (
                <div className="flex flex-row justify-center gap-6 items-center pl-32 pr-32 mb-16 max-lg:flex-col max-lg:p-0">
                  <article className="pl-60 max-lg:p-0 flex-shrink-0">
                    <img src={me} alt="Chandrakiran" className="w-[300px] rounded-3xl" />
                  </article>
                  <Swiper
                    spaceBetween={100}
                    centeredSlides={true}
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="w-1/2 pt-32 relative z-2 pr-20 pb-32 pl-20 max-lg:w-full max-lg:pt-16 max-lg:pb-16 max-lg:pl-0 max-lg:pr-0"
                  >
                    {paragraphs.map((paragraph, index) => (
                      <SwiperSlide
                        className="bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-left max-lg:p-10 cursor-grab"
                        key={index}
                      >
                        <div className="flex gap-6 flex-row justify-start items-center max-lg:flex-col max-lg:justify-center max-lg:text-center ">
                          <div>
                            <img
                              src={paragraph.icon}
                              alt={paragraph.icon}
                              className="w-24"
                            />
                          </div>
                          <div>
                            <h2>{paragraph.title}</h2>
                          </div>
                        </div>
                        <div className="flex flex-row gap-10 max-lg:flex-col">
                          <div className="flex flex-col gap-4 items-center justify-between -mt-10 -mb-10 max-lg:flex-row max-lg:m-0">
                            <p className="text-white">
                              <span className="text-orange">&lt;</span>h3
                              <span className="text-orange">/&gt;</span>
                            </p>
                            <div className="flex justify-between items-center w-1 h-[100%] max-lg:flex-row max-lg:w-[10rem]  max-lg:bg-lightblue">
                              <div></div>
                              <div className="w-[0.5rem] bg-[--lightblue] h-[100%] max-lg:w-10  max-lg:bg-lightblue max-lg:h-[0.25rem]"></div>
                              <div></div>
                            </div>
                            <p className="text-white">
                              <span className="text-orange">&lt;</span>h3
                              <span className="text-orange">/&gt;</span>
                            </p>
                          </div>
                          <div>
                            <p className="text-white text-[1.6rem] sm:text-[1.8rem] lg:text-[2rem]">
                              {paragraph.description}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div
                      className="autoplay-progress absolute right-0 bottom-0 z-10 flex items-center justify-center font-bold text-orange text-4xl w-24 h-24 max-lg:w-16 max-lg:h-16 max-lg:text-3xl "
                      slot="container-end"
                    >
                      <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                      </svg>
                      <span ref={progressContent}></span>
                    </div>
                  </Swiper>
                </div>
              )}

              {/* Tab 2: Work Experience Timeline */}
              {activeTab === "experience" && (
                <div className="flex flex-col gap-12 max-w-4xl mx-auto text-left relative before:absolute before:top-0 before:bottom-0 before:left-[11px] before:w-[2px] before:bg-lightblue/30">
                  {resumeData.experience[currentLangKey].map((exp, index) => (
                    <div key={index} className="relative pl-10 group">
                      <div className="absolute left-[3px] top-2 w-5 h-5 rounded-full bg-[--lightblue] border-4 border-[--darkblue] group-hover:bg-orange group-hover:scale-110 transition-all duration-300 z-10" />
                      <span className="text-[1.3rem] text-orange font-bold tracking-wider">{exp.date}</span>
                      <h3 className={`text-2xl sm:text-3xl font-black mt-2 transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-lightblue font-black mt-1">
                        {exp.company}
                      </h4>
                      <ul className="list-disc pl-5 mt-4 flex flex-col gap-3">
                        {exp.points.map((pt, idx) => (
                          <li key={idx} className={`text-[1.4rem] leading-relaxed ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Education */}
              {activeTab === "education" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                  {resumeData.education[currentLangKey].map((edu, index) => (
                    <div
                      key={index}
                      className={`p-8 rounded-3xl border flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 hover:border-orange hover:bg-white/[0.08]"
                          : "bg-black/5 border-black/10 hover:border-orange hover:bg-black/[0.08]"
                      }`}
                    >
                      <span className="text-[1.3rem] text-orange font-bold">{edu.date}</span>
                      <h3 className={`text-2xl font-black ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {edu.degree}
                      </h3>
                      <p className={`text-[1.5rem] font-bold text-lightblue`}>
                        {edu.institution}
                      </p>
                      <span className={`text-[1.2rem] opacity-60 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {edu.location}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 4: Responsibilities */}
              {activeTab === "responsibilities" && (
                <div className="flex flex-col gap-12 max-w-4xl mx-auto text-left relative before:absolute before:top-0 before:bottom-0 before:left-[11px] before:w-[2px] before:bg-lightblue/30">
                  {resumeData.responsibilities[currentLangKey].map((resp, index) => (
                    <div key={index} className="relative pl-10 group">
                      <div className="absolute left-[3px] top-2 w-5 h-5 rounded-full bg-[--lightblue] border-4 border-[--darkblue] group-hover:bg-orange transition-all duration-300 z-10" />
                      <span className="text-[1.3rem] text-orange font-bold tracking-wider">{resp.date}</span>
                      <h3 className={`text-2xl sm:text-3xl font-black mt-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {resp.role}
                      </h3>
                      <h4 className="text-xl text-lightblue font-black mt-1">
                        {resp.organization}
                      </h4>
                      <ul className="list-disc pl-5 mt-4 flex flex-col gap-3">
                        {resp.points.map((pt, idx) => (
                          <li key={idx} className={`text-[1.4rem] leading-relaxed ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 5: Achievements & Publications */}
              {activeTab === "achievements" && (
                <div className="flex flex-col gap-12 max-w-4xl mx-auto text-left">
                  {/* Publications */}
                  <div>
                    <h3 className={`text-3xl font-black mb-6 border-b border-white/5 pb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {language === "DE" ? "Wissenschaftliche Publikationen" : "Research Publications"}
                    </h3>
                    <div className="flex flex-col gap-6">
                      {resumeData.publications[currentLangKey].map((pub, index) => (
                        <div
                          key={index}
                          className={`p-6 rounded-2xl border transition-all duration-300 hover:border-orange ${
                            theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                          }`}
                        >
                          <p className={`text-[1.5rem] font-bold leading-normal ${theme === "dark" ? "text-white/90" : "text-black/95"}`}>
                            "{pub.title}"
                          </p>
                          <span className="text-sm text-lightblue block mt-2">{pub.publisher}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-6">
                    <h3 className={`text-3xl font-black mb-6 border-b border-white/5 pb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {language === "DE" ? "Erfolge & Zertifikate" : "Achievements & Certificates"}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {resumeData.achievements[currentLangKey].map((ach, index) => (
                        <div
                          key={index}
                          className={`p-6 rounded-2xl border flex flex-col gap-2 transition-all duration-300 hover:border-orange ${
                            theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                          }`}
                        >
                          <h4 className={`text-[1.6rem] font-black ${theme === "dark" ? "text-white" : "text-black"}`}>
                            {ach.title}
                          </h4>
                          <p className={`text-[1.3rem] opacity-70 ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {ach.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 6: Languages */}
              {activeTab === "languages" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                  {resumeData.languages[currentLangKey].map((lang, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <span className={`text-2xl font-black ${theme === "dark" ? "text-white" : "text-black"}`}>
                          {lang.name}
                        </span>
                        <span className="text-[1.4rem] text-orange font-bold">{lang.level}</span>
                      </div>
                      <div className={`w-full h-4 rounded-full overflow-hidden ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.percent}%` }}
                          transition={{ duration: 1, delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-orange to-yellow-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMe;
