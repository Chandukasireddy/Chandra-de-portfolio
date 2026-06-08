import htmlicon from "../../assets/icons/htmlicon.png";
import cssicon from "../../assets/icons/cssicon.png";
import javascripticon from "../../assets/icons/javascripticon.png";
import reacticon from "../../assets/icons/reacticon.png";
import nodejsicon from "../../assets/icons/nodejsicon.png";
import mongodbicon from "../../assets/icons/mongoicon.png";
import figmaicon from "../../assets/icons/figmaicon.png";
import canvaicon from "../../assets/icons/canvaicon.png";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import expressiconwhite from "../../assets/icons/expressicon.png";

import tastyMockup from "../../assets/img/HeroImage1.jpg";
import instorMockup from "../../assets/img/veduka.png";
import silentmoonMockup from "../../assets/img/HR-IT.webp";
import profilepicture from "../img/HeroImage.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

// Generated isometric images
import aiMlIsometric from "../img/ai_ml_isometric.png";
import cloudIsometric from "../img/cloud_isometric.png";
import dataScienceIsometric from "../img/data_science_isometric.png";
import softwareDevIsometric from "../img/software_dev_isometric.png";

import {
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiFirebase,
  SiOracle,
  SiPowerbi,
  SiTableau,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiCplusplus,
  SiAnaconda,
  SiOpenai,
  SiPostgresql
} from "react-icons/si";

import {
  TbRobot,
  TbLink,
  TbServer,
  TbMathFunction,
  TbVector,
  TbMessageCode,
  TbEye,
  TbSearch,
  TbInfinity,
  TbSettingsAutomation,
  TbBinaryTree,
  TbDatabaseSearch,
  TbChartHistogram,
  TbChartPie,
  TbAdjustments
} from "react-icons/tb";

export const headerIntroData = {
  title: {
    de: "Hi, ich bin Chandrakiran Reddy Kasireddy",
    en: "Hi, I'm Chandrakiran Reddy Kasireddy",
  },
  subtitle: (
   <div className="overflow-hidden whitespace-nowrap w-full">
      <span className="scrolling-text inline-block">
        🚧 Work in Progress.. Updates Coming Soon! 🚀
      </span>
   </div>
  ),
  description: {
    de: "Ich bin Chandrakiran Reddy Kasireddy, ein KI- und Cloud-Enthusiast, der sich der Lösung realer Herausforderungen mit modernster Technologie verschrieben hat. Vom Aufbau florierender Tech-Communities bis hin zur Betreuung von Startups – ich glaube an Innovation, Zusammenarbeit und wirkungsorientiertes Wachstum!",
    en: "I'm Chandrakiran Reddy Kasireddy, an AI and Cloud enthusiast dedicated to solving real-world challenges with cutting-edge technology. From leading thriving tech communities to mentoring startups, I believe in innovation, collaboration, and impact-driven growth!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
      // link: "https://www.linkedin.com/in/chandukasireddy/", // LinkedIn Profile
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
      // link: "https://github.com/Chandukasireddy", // GitHub Profile
    },
  ],  
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Tasty App",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://chandu.graspins.com",
    githuburl: "https://github.com/Chandukasireddy",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Silentmoon",
    description:
      "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
    description_EN:
      "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://chandu.graspins.com/",
    githuburl:
      "https://github.com/Chandukasireddy",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Furniture Organizer",
    description:
      "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://chandu.graspins.com/",
    githuburl: "https://github.com/Chandukasireddy",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataAiMl = [
  {
    skillsTitle: "AI & Machine Learning",
    image: aiMlIsometric,
    skills: [
      { title: "Generative AI & LLMs", hash: "#genai", icon: SiOpenai, color: "#412991" },
      { title: "Agentic AI", hash: "#agentic", icon: TbRobot, color: "#FF9900" },
      { title: "LangChain", hash: "#langchain", icon: TbLink, color: "#1C3C3A" },
      { title: "Agno", hash: "#agno", icon: TbSettingsAutomation, color: "#00C4CC" },
      { title: "LLM Fine-Tuning", hash: "#finetuning", icon: TbAdjustments, color: "#FF007F" },
      { title: "Agentic RAG", hash: "#agenticrag", icon: TbDatabaseSearch, color: "#0080FF" },
      { title: "Graph RAG", hash: "#graphrag", icon: TbBinaryTree, color: "#FF3366" },
      { title: "NLP", hash: "#nlp", icon: TbMessageCode, color: "#9933FF" },
      { title: "Computer Vision", hash: "#computervision", icon: TbEye, color: "#33CC99" },
      { title: "Semantic Search", hash: "#semanticsearch", icon: TbSearch, color: "#E67E22" },
      { title: "Embeddings", hash: "#embeddings", icon: TbVector, color: "#2980B9" },
    ],
  },
] as const;

export const skillsDataCloud = [
  {
    skillsTitle: "Cloud Technologies",
    image: cloudIsometric,
    skills: [
      { title: "AWS", hash: "#aws", icon: SiAmazonaws, color: "#FF9900" },
      { title: "Google Cloud", hash: "#gcp", icon: SiGooglecloud, color: "#4285F4" },
      { title: "Oracle Database", hash: "#oracle", icon: SiOracle, color: "#F80000" },
      { title: "Azure SQL Database", hash: "#azure", icon: SiMicrosoftazure, color: "#0089D6" },
      { title: "Compute & Clusters", hash: "#compute", icon: TbServer, color: "#8E44AD" },
      { title: "Firebase", hash: "#firebase", icon: SiFirebase, color: "#FFCA28" },
      { title: "DevOps", hash: "#devops", icon: TbInfinity, color: "#2ECC71" },
    ],
  },
] as const;

export const skillsDataDataScience = [
  {
    skillsTitle: "Data Science & Analytics",
    image: dataScienceIsometric,
    skills: [
      { title: "SQL", hash: "#sql", icon: SiPostgresql, color: "#336791" },
      { title: "Power BI", hash: "#powerbi", icon: SiPowerbi, color: "#F2C811" },
      { title: "Tableau & Matplotlib", hash: "#dataviz", icon: SiTableau, color: "#E97627" },
      { title: "Feature Engineering", hash: "#featureeng", icon: TbChartHistogram, color: "#27AE60" },
      { title: "Business Intelligence", hash: "#bi", icon: TbChartPie, color: "#16A085" },
      { title: "Statistical Analysis", hash: "#stats", icon: TbMathFunction, color: "#D35400" },
    ],
  },
] as const;

export const skillsDataSoftware = [
  {
    skillsTitle: "Software Development",
    image: softwareDevIsometric,
    skills: [
      { title: "Python", hash: "#python", icon: SiPython, color: "#3776AB" },
      { title: "JavaScript", hash: "#javascript", icon: SiJavascript, color: "#F7DF1E" },
      { title: "Node.js", hash: "#nodejs", icon: SiNodedotjs, color: "#339933" },
      { title: "Firebase", hash: "#firebase-dev", icon: SiFirebase, color: "#FFCA28" },
      { title: "Git", hash: "#git", icon: SiGit, color: "#F05032" },
      { title: "Docker", hash: "#docker", icon: SiDocker, color: "#2496ED" },
      { title: "CI/CD Pipelines", hash: "#cicd", icon: SiGithubactions, color: "#2088FF" },
      { title: "C++", hash: "#cplusplus", icon: SiCplusplus, color: "#00599C" },
      { title: "Conda", hash: "#conda", icon: SiAnaconda, color: "#44A833" },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:chandukasireddy02@gmail.com",
  text: "-->Contact-me",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/chandukasireddy/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Chandukasireddy",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:chandukasireddy02@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Selbstloses Beitragen nährt wahren Erfolg, denn jede investierte Mühe kehrt auf unerwartete Weise zurück."',
    en: `"Contributing selflessly fuels true success, for every effort given returns in ways beyond imagination."`,
    author: "ChanduKasireddy",
  },
  {
    de: '"Wahrer Erfolg ist es, Wertschätzung von denen zu erhalten, die wir selbst wertschätzen."',
    en: `"True success is receiving appreciation from those we deeply appreciate."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Führung mit Vision und Leidenschaft",
      description:
        "Als ehemaliger IEEE-Vorsitzender, Google DSC Community-Leiter und Gründer des Feliks Clubs habe ich meine Fähigkeit entwickelt, Teams zu inspirieren und zu stärken. Für mich bedeutet Führung, Wachstum, Zusammenarbeit und Innovation in den Gemeinschaften, denen ich diene, zu fördern.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Leading with Vision and Passion",
      description:
        "As a former IEEE Chair, Google DSC Community Lead, and founder of Feliks Club, I have honed my ability to inspire and empower teams. Leadership, to me, is about fostering growth, collaboration, and innovation in the communities I serve.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Chandrakiran Reddy Kasireddy meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Chandrakiran Reddy Kasireddy may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
