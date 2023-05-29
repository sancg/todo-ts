import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TodoProvider } from "./context/TodoContext.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <TodoProvider>
            <App />
        </TodoProvider>
    </React.StrictMode>
);
