import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Menu } from "lucide-react";
import Button from "../../UI/Buttons/Button";
import Input from "../../UI/Input/Input";
import { useToast } from "../Providers/ToastProvider";
import sendReq from "../../api/sendReq";
import ReCAPTCHA from "react-google-recaptcha";

const NavBar = ({sectionsRef}) => {
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const { showToast } = useToast();
  const [errorMessagePhone, setErrorMessagePhone] = useState("");
    const [captchaToken, setCaptchaToken] = useState(null);
    const recaptchaRef = useRef();

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
  const validatePhone = (phone) => phone.replace(/\D/g, "").length === 11;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && menuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;

    if (!phone) {
      showToast({ text1: "Заполните все поля!", type: "warning" });
      console.log("Заполните все поля!", phone);
      return;
    }

    if (!validatePhone(phone)) {
      setErrorMessagePhone("Введите корректный номер телефона");
      valid = false;
    } else {
      setErrorMessagePhone("");
    }

    if (!valid) return;

    setIsLoading(true);

    if (!captchaToken) {
  showToast({ text1: "Подтвердите, что вы не робот", type: "warning" });
  return;
}

    try {
      const res = await sendReq(
        '',
        '',
        phone,
        captchaToken,
        "constructorForm/submit"
      );
       recaptchaRef.current?.reset();
      setCaptchaToken(null);

      if (res.status === 200) {
        showToast({ text1: "Сообщение отправлено", type: "success" });
        setPhone("");
      }
      showToast({ text1: "Сообщение отправлено", type: "success" });
      setPhone("");
    } catch (error) {
      showToast({ text1: "Ошибка при отправке", text2: error, type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleScrollTo = (section) => {
    if(section === 'top') {
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMenu();
      return;
    }
    if (sectionsRef[section]?.current) {
      sectionsRef[section].current.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };


  
  return (
    <div
      className={`headers-wrapper ${showHeader ? "visible" : "hidden"} ${
        isAtTop ? "transparent" : ""
      }`}
    >
      <div className="null-menu">
        <div className="menu-container">
          <Menu onClick={toggleMenu} size={60} />

          {!isAtTop && (
            <div className="contact-info-container">
              <div className="contact-info">
                <a href="tel:+79209680801" className="contact-item">
                  +7 (920) 968-08-01 
                </a>
                <a
                  href="https://yandex.ru/maps/?text=Москва%2C%20ул.%20Примерная%2C%201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  Рязань, ул. Шабулина, 9
                </a>
              </div>
              <div className="contact-info">
                <a href="mailto:npoconstructor@yandex.ru" className="contact-item">
                  npoconstructor@yandex.ru
                </a>
                <span className="contact-item">Пн–Пт: 9:00–18:00</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="nav-overlay">
          <button className="close-btn" onClick={closeMenu}>
            ✕
          </button>
          <div className="overlays-wrapper">
            <nav className="overlay-nav">
              <NavLink
                to="/"
                onClick={() => handleScrollTo("top")}
                className={ "nav-link"}
              >
                Главная
              </NavLink>
              <NavLink
                onClick={() => handleScrollTo("about")}
                className={ "nav-link"}
              >
                О компании
              </NavLink>
              <NavLink
                onClick={() => handleScrollTo("services")}
                className={ "nav-link"}
              >
                Услуги
              </NavLink>
              <NavLink
                onClick={() => handleScrollTo("production")}
                className={ "nav-link"}
              >
                Производство
              </NavLink>
              <NavLink
                onClick={() => handleScrollTo("contacts")}
                className={ "nav-link"}
              >
                Контакты
              </NavLink>
            </nav>
            <nav className="overlay-nav">
              <label htmlFor="phone" className="overlay-nav-label">
                Телефон:
                <p id="phone" className="overlay-nav-label-item">
                  {" "}
                  +7 (999) 123-45-67
                </p>
              </label>
              <label htmlFor="email" className="overlay-nav-label">
                Email :
                <p id="email" className="overlay-nav-label-item">
                  npoconstructor@yandex.ru
                </p>
              </label>
              <form ref={formRef} onSubmit={handleSubmit}>
                <Input
                  mask="+7 (999) 999-99-99"
                  placeholder="Заказать обратный звонок"
                  label="phone"
                  className="overlay-nav-input"
                  style={{
                    fontSize: "15px",
                    backgroundColor: "white",
                    borderRadius: "0",
                    padding: "5%",
                    color: "black",
                  }}
                  onChange={(e, value) => setPhone(value)}
                  errorMessage={errorMessagePhone}
                  name="phone"
                />
                {phone.trim() !== "" && (
  <ReCAPTCHA
    sitekey={RECAPTCHA_SITE_KEY}
    onChange={(token) => setCaptchaToken(token)}
    ref={recaptchaRef}
  />
)}
                <Button
                  className="overlay-nav-button"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Отправка..." : "Отправить"}
                </Button>
              </form>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};


export default NavBar;

