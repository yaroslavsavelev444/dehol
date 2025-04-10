import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import ToastProvider from "./components/Providers/ToastProvider";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import FloatingMessageButton from "./components/FloatingMessageButton/FloatingMessageButton";
import ScrollToTopButton from "./components/ScrollTop/ScrollToTopButton";
import Production from "./pages/Production/Production";
import Contacts from "./pages/Contacts/Contacts";
import { useState } from "react";


function App() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(true);

  return (
    <>
      <ToastProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/production" element={<Production />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <FloatingMessageButton setIsScrollTopVisible={setIsScrollTopVisible} />
        {isScrollTopVisible && <ScrollToTopButton />}
        <Footer />
      </ToastProvider>
    </>
  );
}

export default App;
