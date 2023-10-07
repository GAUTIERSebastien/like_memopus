import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/scss/index.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import User from "./components/User";
import {
  BrowserRouter as Router, // changez ceci
  Route,
  Routes,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./components/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
        </>
      ) : (
        <Route path="/*" element={<User />} />
      )}
    </Routes>
  );
};

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
