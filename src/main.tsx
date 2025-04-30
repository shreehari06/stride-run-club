import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./app/globals.css";
import "./fontStyles.css";

console.log("Main.tsx is executing");

const container = document.getElementById("root");
console.log("Root element:", container);

if (!container) {
  console.error("Root element not found!");
} else {
  const root = createRoot(container);
  console.log("Created React root");

  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Rendered App component");
  } catch (error) {
    console.error("Error in root.render:", error);
  }
}
