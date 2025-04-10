import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // можно заменить на любую иконку
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Отслеживание прокрутки
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // инициализация

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      className="scroll-to-top-button"
      onClick={scrollToTop}
      aria-label="Прокрутить вверх"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;