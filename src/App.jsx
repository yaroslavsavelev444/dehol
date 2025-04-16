import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import ToastProvider from "./components/Providers/ToastProvider";
import { Routes, Route } from "react-router-dom";
import FloatingMessageButton from "./components/FloatingMessageButton/FloatingMessageButton";
import ScrollToTopButton from "./components/ScrollTop/ScrollToTopButton";
import { useState } from "react";
import { lazy, Suspense } from 'react';
import ErrorBoundary from "./ultils/errorBoundary";
import BeatLoaderComponent from "./components/BeatLoaderComponent/BeatLoaderComponent";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Services/Services"));
const Production = lazy(() => import("./pages/Production/Production"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
function App() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(true);
  return (
    <>
      <ToastProvider>
        <NavBar />
        <ErrorBoundary>
        <Suspense fallback={<BeatLoaderComponent />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/production" element={<Production />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} /> {/* этот маршрут обязательно в конце */}
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
