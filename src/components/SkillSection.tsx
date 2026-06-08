import React from "react";

interface Skill {
  title: string;
  hash: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly image: string;
  readonly skills: readonly Skill[];
}

interface SkillSectionProps {
  skillsData: readonly SkillCategory[];
  theme: "dark" | "light";
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsData, theme }) => {
  const category = skillsData[0];

  return (
    <article
      className={`h-auto rounded-3xl p-8 pt-10 flex flex-col gap-8 relative z-10 transition-all duration-500 overflow-hidden border ${
        theme === "dark"
          ? "bg-[--blackblue]/80 border-white/5 dark-mode-shadow"
          : "bg-[--icewhite]/80 border-black/5 dark-shadow"
      }`}
    >
      {/* Header section with Category name and Isometric metallic block */}
      <div className="flex justify-between items-center gap-6 pb-6 border-b border-white/5">
        <div className="text-left">
          <p className={`font-black text-2xl sm:text-3xl lg:text-4xl ${theme === "dark" ? "text-white" : "text-black"}`}>
            <span className="text-[--orange]">&lt;</span>
            {category.skillsTitle}
            <span className="text-[--orange]">/&gt;</span>
          </p>
        </div>
        <div className="relative group flex-shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-[--orange] to-blue-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={category.image}
            alt={`${category.skillsTitle} Isometric`}
            className="relative w-16 h-16 sm:w-20 sm:h-20 object-contain transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Chips/Badges list */}
      <div className="flex flex-wrap gap-4 justify-start">
        {category.skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className={`skill-chip flex items-center gap-3 py-2 px-4 rounded-full border text-[1.3rem] font-semibold transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-white/80 hover:text-white"
                  : "bg-black/5 border-black/10 text-black/80 hover:text-black"
              }`}
              style={{
                borderColor: `${skill.color}33`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = skill.color;
                e.currentTarget.style.backgroundColor = `${skill.color}15`;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 4px 12px ${skill.color}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${skill.color}33`;
                e.currentTarget.style.backgroundColor = "";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {Icon && (
                <Icon
                  className="w-6 h-6 transition-transform duration-300"
                  style={{ color: skill.color }}
                />
              )}
              <span>{skill.title}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default SkillSection;
