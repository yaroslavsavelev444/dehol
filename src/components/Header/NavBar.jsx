import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Menu } from "lucide-react";
import Button from "../../UI/Buttons/Button";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Показывать/скрывать меню
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setShowHeader(false); // Скрыть при скролле вниз
    } else {
      setShowHeader(true); // Показать при скролле вверх
    }

    setIsAtTop(currentScrollY < 50);
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`headers-wrapper ${showHeader ? "visible" : "hidden"} ${
        isAtTop ? "transparent" : ""
      }`}
    >
      <div className="null-menu">
        <div className="menu-container">
          <Menu onClick={toggleMenu} size={60} />
          <div className="menu-logo">
            <img src="/img/dohol-logo.png" alt="logo" className="menu-logo-img" />
          </div>

          {!isAtTop && (
            <div className="contact-info-container">
              <div className="contact-info">
                <a href="tel:+79991234567" className="contact-item">📞 +7 (999) 123-45-67</a>
                <a
                  href="https://yandex.ru/maps/?text=Москва%2C%20ул.%20Примерная%2C%201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  📍 Москва, ул. Примерная, 1
                </a>
                </div>
                <div className="contact-info">
                <a href="mailto:optimazavod@yandex.ru" className="contact-item">✉️ optimazavod@yandex.ru</a>
                <span className="contact-item">🕒 Пн–Пт: 9:00–18:00</span>
              </div>
            </div>
          )}

          <div className="menu-buttons">
            {!isAtTop && (
              <>
                <Button >Заказать расчёт</Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="nav-overlay">
          <button className="close-btn" onClick={closeMenu}>✕</button>
          <div className="overlays-wrapper">
            <nav className="overlay-nav">
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Главная</NavLink>
              <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>О компании</NavLink>
              <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Услуги</NavLink>
              <NavLink to="/production" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Производство</NavLink>
              <NavLink to="/contacts" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Контакты</NavLink>
            </nav>
            <nav className="overlay-nav">
                <label htmlFor="phone" className="overlay-nav-label" >Телефон: 
                  <p id="phone" className="overlay-nav-label-item" > +7 (999) 123-45-67</p>
                </label>
                <label htmlFor="email" className="overlay-nav-label" >Email : 
                  <p id="email" className="overlay-nav-label-item"> optimazavod@yandex.ru</p>
                </label>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;