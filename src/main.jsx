import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Auth0Provider } from "@auth0/auth0-react";
import { LogInContextProvider } from "./Context/LogInContext/Login.jsx";
import ErrorBoundary from "./components/constants/Error.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/DarkMode/ThemeProvider.jsx";
import { RefProvider } from "./Context/RefContext/RefContext.jsx";
import { ChatContextProvider } from "./Context/ChatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RefProvider>
        <LogInContextProvider>
          <ChatContextProvider>
            <ErrorBoundary>
              <Toaster />
              <App />
            </ErrorBoundary>
          </ChatContextProvider>
        </LogInContextProvider>
      </RefProvider>
    </ThemeProvider>
  </BrowserRouter>
);
