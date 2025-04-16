import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import ToastProvider from "./components/Providers/ToastProvider";
import { Routes, Route } from "react-router-dom";
import FloatingMessageButton from "./components/FloatingMessageButton/FloatingMessageButton";
import ScrollToTopButton from "./components/ScrollTop/ScrollToTopButton";
import { useRef, useState } from "react";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./ultils/errorBoundary";
import BeatLoaderComponent from "./components/BeatLoaderComponent/BeatLoaderComponent";

const Home = lazy(() => import("./pages/Home/Home"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
function App() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(true);

  const sectionsRef = {
    about: useRef(null),
    services: useRef(null), // ✅ вот правильный ключ
    production: useRef(null),
    contacts: useRef(null),
  };

  return (
    <>
      <ToastProvider>
        <NavBar sectionsRef={sectionsRef} />
        <ErrorBoundary>
          <Suspense fallback={<BeatLoaderComponent />}>
            <Routes>
              <Route path="/" element={<Home sectionsRef={sectionsRef} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <FloatingMessageButton setIsScrollTopVisible={setIsScrollTopVisible} />
        {isScrollTopVisible && <ScrollToTopButton />}
        <Footer />
      </ToastProvider>
    </>
  );
}

export default App;
