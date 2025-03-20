import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PdfProvider } from "./context/PdfContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PdfProvider>
      <App />
    </PdfProvider>
  </StrictMode>
);
