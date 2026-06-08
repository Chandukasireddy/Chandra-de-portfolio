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

    const currentPath = location.pathname;
    if (currentPath.startsWith("/en")) {
      navigate(currentPath.replace(/^\/en/, "/de") + location.search + location.hash, { replace: true });
    } else if (currentPath.startsWith("/de")) {
      navigate(currentPath.replace(/^\/de/, "/en") + location.search + location.hash, { replace: true });
    } else if (currentPath === "/") {
      navigate(`/${nextLang.toLowerCase()}` + location.search + location.hash, { replace: true });
    } else {
      navigate(`/${nextLang.toLowerCase()}${currentPath}` + location.search + location.hash, { replace: true });
    }
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
        navigate(`/${initialLanguage.toLowerCase()}` + location.search + location.hash, { replace: true });
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
