import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ToastContainer } from "./functions/toasts";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        <ToastContainer />
    </React.StrictMode>
);
