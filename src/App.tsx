import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";
import LanguageContextProvider from "./context/language-context";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/en" element={<Home />}></Route>
                <Route path="/de" element={<Home />}></Route>
                <Route path="/l" element={<Home />}></Route>
                <Route path="/d" element={<Home />}></Route>
                <Route path="/en/l" element={<Home />}></Route>
                <Route path="/en/d" element={<Home />}></Route>
                <Route path="/de/l" element={<Home />}></Route>
                <Route path="/de/d" element={<Home />}></Route>
                <Route path="/imprint" element={<Home />}></Route>
                <Route path="/privacy" element={<Home />}></Route>
                <Route path="/en/imprint" element={<Home />}></Route>
                <Route path="/de/imprint" element={<Home />}></Route>
                <Route path="/en/privacy" element={<Home />}></Route>
                <Route path="/de/privacy" element={<Home />}></Route>
                <Route path="*" element={<Home />}></Route>
              </Routes>
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
