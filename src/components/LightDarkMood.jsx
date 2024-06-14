import useLocalStorage from "./useLocalStorage";
import "./style.css";

const LightDarkMood = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);

  return (
    <div className="container" theme={theme}>
      <div className="main">
        <p>Hello World!</p>
        <button onClick={handleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMood;
