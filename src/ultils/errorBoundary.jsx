import React from "react";

class ErrorBoundary extends React.Component {
    state = { hasError: false };
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Ошибка загрузки компонента</div>;
      }
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;