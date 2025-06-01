import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Buttons/Button";
import { useToast } from "../Providers/ToastProvider";
import { X } from "lucide-react";
import "../FloatingMessageButton/FloatingMessageButton.css";
import sendReq from "../../api/sendReq";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function Form({ onClose }) {
  const formRef = useRef();
  const { showToast } = useToast();

  const [errorMessagePhone, setErrorMessagePhone] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef();

  const validateEmail = (email) => email.includes("@") && email.includes(".");
  const validatePhone = (phone) => phone.replace(/\D/g, "").length === 11;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    if (!name || !email || !phone || !captchaToken) {
      showToast({
        text1: "Заполните все поля и пройдите капчу",
        type: "warning",
      });
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessageEmail("Некорректный email");
      valid = false;
    } else {
      setErrorMessageEmail("");
    }

    if (!validatePhone(phone)) {
      setErrorMessagePhone("Введите корректный номер телефона");
      valid = false;
    } else {
      setErrorMessagePhone("");
    }

    if (
      !captchaToken ||
      typeof captchaToken !== "string" ||
      captchaToken.length < 10
    ) {
      showToast({
        text1: "Ошибка с капчей. Попробуйте ещё раз.",
        type: "warning",
      });
      return;
    }

    if (!valid) return;

    setIsLoading(true);

    try {
      const res = await sendReq(
        name,
        email,
        phone,
        captchaToken,
        "constructorForm/submit"
      );
      recaptchaRef.current?.reset();
      setCaptchaToken(null);

      if (res.status === 200) {
        showToast({ text1: "Сообщение отправлено", type: "success" });
        onClose();
      }
    } catch (error) {
      showToast({
        text1: "Ошибка при отправке",
        text2: error?.response?.data?.message || error.message,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="floating-form">
      <X
        size={20}
        color="#fff"
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
        }}
      />
      <div className="form-header">
        <h2>Связаться с нами</h2>
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            name="name"
            placeholder="Имя"
            onChange={(e, value) => setName(value)}
            mask={false}
          />
        </div>
        <div className="form-group">
          <Input
            name="email"
            placeholder="Email"
            onChange={(e, value) => setEmail(value)}
            mask={false}
            errorMessage={errorMessageEmail}
          />
        </div>
        <div className="form-group">
          <Input
            name="phone"
            placeholder="Телефон"
            onChange={(e, value) => setPhone(value)}
            mask="+7 (999) 999-99-99"
            errorMessage={errorMessagePhone}
          />
        </div>
        {(phone.trim() !== "" || email.trim() !== "" || name.trim() !== "") && (
  <div className="form-group">
    <ReCAPTCHA
      sitekey={RECAPTCHA_SITE_KEY}
      onChange={(token) => setCaptchaToken(token)}
      ref={recaptchaRef}
    />
  </div>
)}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Отправка..." : "Отправить"}
        </Button>
      </form>
    </div>
  );
}
