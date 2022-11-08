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
        <header className="flex bg-white dark:bg-gray-800 justify-between items-center gap-2 p-6 sm:px-10 shadow">
            <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl dark:text-slate-200">Where in the world?</h1>
            <div className="flex gap-2 items-center cursor-pointer"
                 onClick={handleThemeSwitch}>
                <span className="inline-block w-6 h-6 dark:w-5 dark:h-5 bg-icon-sun dark:bg-icon-moon"></span>
                <p className="text-sm md:text-base dark:text-slate-200">{theme === "dark" ? "Dark mode" : "Light mode"}</p>
            </div>
        </header>
    )
}