import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthContextProvider from "./contexts/authContext.jsx";
import SearchContextProvider from "../src/contexts/searchContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <SearchContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </SearchContextProvider>
  </AuthContextProvider>
);
