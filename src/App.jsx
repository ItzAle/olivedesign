import React, { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
      <button
        onClick={handleChangeTheme}
        className="bg-slate-200 px-4 py-2 rounded dark:bg-neutral-800 dark:text-white"
      >
        Change Theme
      </button>
    </div>
  );
}

export default App;
