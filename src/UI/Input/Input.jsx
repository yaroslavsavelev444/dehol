import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import "./Input.css"; // Стилевые классы для кастомизации

const Input = ({
  mask,
  errorMessage,
  placeholder,
  isPlaceholderAnimated = false,
  onChange,
  className = "",
  style = {},
  ...props
}) => {
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Анимация placeholder
  useEffect(() => {
    if (isPlaceholderAnimated && placeholder) {
      const interval = setInterval(() => {
        setAnimatedPlaceholder(placeholder.slice(0, placeholderIndex));
        if (placeholderIndex + 1 > placeholder.length) {
          setPlaceholderIndex(0);
        } else {
          setPlaceholderIndex(placeholderIndex + 1);
        }
      }, 150);

      return () => clearInterval(interval);
    } else {
      setAnimatedPlaceholder(placeholder);
    }
  }, [placeholder, placeholderIndex, isPlaceholderAnimated]);

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e, e.target.value); // не numericValue!
    }
  };

  const commonProps = {
    className: `custom-input ${className}`.trim(), // объединение классов
    style,
    type: "text",
    placeholder: animatedPlaceholder,
  };

  const renderInput = () => {
    if (mask) {
      return (
        <InputMask {...props} mask={mask} onChange={handleInputChange}>
  {(inputProps) => (
    <input
      {...inputProps}
      {...commonProps}
      value={props.value} // <-- добавь!
    />
  )}
</InputMask>
      );
    } else {
      return (
        <input
        {...props}
        {...commonProps}
        value={props.value} // важно!
        onChange={handleInputChange}
      />
      );
    }
  };

  return (
    <div className="input-wrapper">
      {renderInput()}
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default Input;