import { useState, useEffect } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <button className="theme-toggle" onClick={() => setDark(!dark)}>
            {dark ? "🌞" : "🌙"}
        </button>
    );
};

export default ThemeToggle;

// import { useState, useEffect } from "react";
// import "./ThemeToggle.css";

// const ThemeToggle = () => {
//     const [dark, setDark] = useState(false);

//     useEffect(() => {
//         if (dark) {
//             document.body.classList.add("dark-theme");
//         } else {
//             document.body.classList.remove("dark-theme");
//         }
//     }, [dark]);

//     return <button onClick={() => setDark(!dark)}>{dark ? "🌞" : "🌙"}</button>;
// };

// export default ThemeToggle;
