import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Components/context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="dark:bg-slate-700 dark:text-white">
      <AuthProvider>
        <App />
      </AuthProvider>
    </div>
  </BrowserRouter>,
);
