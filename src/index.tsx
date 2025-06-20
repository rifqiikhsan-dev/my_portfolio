import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WebPortfolio } from "./screens/web-portfolio";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <WebPortfolio />
  </StrictMode>
);
