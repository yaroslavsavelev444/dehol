import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      once: true,       // проигрывается один раз
      offset: 0,      // анимация начнётся, когда футер будет в 150px от экрана
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <footer className="footer">
     <div className="wave-container">
  <svg
    className="wave wave1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    data-aos="wave-up"
    data-aos-delay="0"
    data-aos-duration="800"
  >
    <path
      fill="#fff"
      fillOpacity="0.3"
      d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,320L0,320Z"
    />
  </svg>

  <svg
    className="wave wave2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    data-aos="wave-up"
    data-aos-delay="400"
    data-aos-duration="800"
  >
    <path
      fill="#778899"
      fillOpacity="0.2"
      d="M0,192L120,170.7C240,149,480,107,720,117.3C960,128,1200,192,1320,224L1440,256L1440,320L0,320Z"
    />
  </svg>

  <svg
    className="wave wave3"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    data-aos="wave-up"
    data-aos-delay="800"
    data-aos-duration="800"
  >
    <path
      fill="#FF0000"
      fillOpacity="0.1"
      d="M0,224L180,192C360,160,720,96,1080,96C1200,96,1320,117,1380,128L1440,139L1440,320L0,320Z"
    />
  </svg>
</div>

      <div className="footer-content">
        <div className="socials">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-instagram"></i>
        </div>

        <div className="footer-menu">
          <a href="#">Главная</a>
          <a href="#">О компании</a>
          <a href="#">Услуги</a>
          <a href="#">Производство</a>
          <a href="#">Контакты</a>
        </div>

        <p className="copyright">
          ©2025 Твоё Имя | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;