import { useEffect, useState, createContext, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const THEME_STORAGE_KEY = "theme";

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    const localLanguage = window.localStorage.getItem("language") as "EN" | "DE" | null;
    const currentLanguage = localLanguage || "EN";

    let nextPath = "/";
    if (currentLanguage === "DE" && newTheme === "light") {
      nextPath = "/de/l";
    } else if (currentLanguage === "DE" && newTheme === "dark") {
      nextPath = "/de";
    } else if (currentLanguage === "EN" && newTheme === "light") {
      nextPath = "/l";
    } else {
      nextPath = "/";
    }

    navigate(nextPath + location.search + location.hash, { replace: true });
  };

  useEffect(() => {
    const pathname = location.pathname;
    let initialTheme: Theme = "dark";

    if (pathname.endsWith("/l") || pathname === "/l") {
      initialTheme = "light";
    } else if (pathname.endsWith("/d") || pathname === "/d") {
      initialTheme = "dark";
    } else {
      const localTheme = window.localStorage.getItem(
        THEME_STORAGE_KEY
      ) as Theme | null;
      if (localTheme) {
        initialTheme = localTheme;
      }

      if (pathname === "/") {
        const localLanguage = window.localStorage.getItem("language") as "EN" | "DE" | null;
        const initialLanguage = localLanguage || "EN";
        
        if (initialLanguage === "EN" && initialTheme === "light") {
          navigate("/l", { replace: true });
        } else if (initialLanguage === "DE" && initialTheme === "light") {
          navigate("/de/l", { replace: true });
        } else if (initialLanguage === "DE" && initialTheme === "dark") {
          navigate("/de", { replace: true });
        }
      }
    }

    setTheme(initialTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);
  }, [location.pathname]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
