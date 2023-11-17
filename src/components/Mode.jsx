import { useEffect, useState } from "react";
function Mode() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <label
      htmlFor="toggle"
      className={` relative h-6 w-14 py-4 p-[3px] flex items-center border rounded-2xl transition-transform ${
        theme === "dark" ? "bg-gray-400 border-none" : "bg-blue-400"
      }`}
    >
      <div
        onClick={handleChangeTheme}
        className={`cursor-pointer w-6 h-6 rounded-full shadow-md absolute bg-white transition-transform transform ${
          theme === "light" ? "translate-x-full" : ""
        }`}
      ></div>
    </label>
  );
}

export default Mode;
