import { useEffect, useState, createContext, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type language = "EN" | "DE";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<language>("EN");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const nextLang = language === "EN" ? "DE" : "EN";
    setLanguage(nextLang);
    window.localStorage.setItem("language", nextLang);
    if (nextLang === "DE") {
      document.documentElement.classList.add("DE");
    } else {
      document.documentElement.classList.remove("DE");
    }

    const currentTheme = document.documentElement.classList.contains("light") ? "light" : "dark";
    let nextPath = "/";
    if (nextLang === "DE" && currentTheme === "light") {
      nextPath = "/de/l";
    } else if (nextLang === "DE" && currentTheme === "dark") {
      nextPath = "/de";
    } else if (nextLang === "EN" && currentTheme === "light") {
      nextPath = "/l";
    } else {
      nextPath = "/";
    }

    navigate(nextPath + location.search + location.hash, { replace: true });
  };

  useEffect(() => {
    const pathname = location.pathname;
    let initialLanguage: language = "EN";

    if (pathname.startsWith("/de")) {
      initialLanguage = "DE";
    } else if (pathname.startsWith("/en")) {
      initialLanguage = "EN";
    } else {
      const localLanguage = window.localStorage.getItem(
        "language"
      ) as language | null;

      if (localLanguage) {
        initialLanguage = localLanguage;
      } else if (window.matchMedia("(prefers-color-scheme: DE)").matches) {
        initialLanguage = "DE";
      }

      if (pathname === "/") {
        const localTheme = window.localStorage.getItem("theme") as "light" | "dark" | null;
        const initialTheme = localTheme || "dark";
        if (initialLanguage === "DE") {
          navigate(initialTheme === "light" ? "/de/l" : "/de", { replace: true });
        }
      }
    }

    setLanguage(initialLanguage);
    window.localStorage.setItem("language", initialLanguage);
    if (initialLanguage === "DE") {
      document.documentElement.classList.add("DE");
    } else {
      document.documentElement.classList.remove("DE");
    }
  }, [location.pathname]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
