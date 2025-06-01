import React from "react";
import Button from "../UI/Buttons/Button";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            flexDirection: "column",

            textAlign: "center",
            padding: 20,
          }}
        >
          <h2 style={{ fontWeight: 500, marginBottom: 12 }}>
            Что-то пошло не так
          </h2>
          <p style={{ maxWidth: 400, marginBottom: 20 }}>
            Мы уже знаем о проблеме. Попробуйте обновить страницу — это может
            помочь.
          </p>
         <Button onClick={this.handleReload}>Обновить</Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;