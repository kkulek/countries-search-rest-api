import {useEffect, useState} from "react";

export function Header() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div className="flex justify-between items-center">
            <h1>Where in the world?</h1>
            <div className="flex gap-2 items-center"
                 onClick={handleThemeSwitch}>
                <span className="inline-block w-6 h-6 dark:w-5 dark:h-5 bg-icon-sun dark:bg-icon-moon"></span>
                <p>{theme === "dark" ? "Dark mode" : "Light mode"}</p>
            </div>
        </div>
    )
}