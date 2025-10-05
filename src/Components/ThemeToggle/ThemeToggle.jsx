import { useState, useEffect } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [dark]);

    return (
        <button onClick={() => setDark(!dark)}>{dark ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}</button>
    );
};

export default ThemeToggle;
