import React from "react";
import "./Footer.css";
import { FaTelegram, FaVk, FaYoutube } from "react-icons/fa";
import FooterIcon from "./FooterIcon";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-body footer-uni">
          <div className="footer-body-content">
            <div className="footer-hrefs">
              <h3>Lorem, ipsum</h3>
            </div>

            <div className="footer-docs">
              <h3>Связаться с нами</h3>
              <p>Связаться с нами</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom footer-uni">
          <div className="footer-bottom-links">
            <FooterIcon icon={<FaVk size={30} />} />
            <FooterIcon icon={<FaTelegram size={30} />} />
            <FooterIcon icon={<FaYoutube size={30} />} />
          </div>
        </div>

        <div className="footer-footer">
          <div className="footer-footer-content">
            <p>Copyright © 2023 Сервис. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;