import styles from "./../../styles/ThemeToggleBar.module.css";

import "react-toastify/dist/ReactToastify.css";
// import { useTheme } from "../../store/theme-context";
import { useTheme } from "../../store/theme-context";

const ThemeTogglerBar = () => {
  const { theme, changeTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      <label className={styles.switch}>
        {theme === "light" && (
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={() => {
              console.log("light theme");
              changeTheme("light");
            }}
          />
        )}

        {theme === "dark" && (
          <input
            type="checkbox"
            onChange={() => {
              console.log("dark theme");
              changeTheme("dark");
            }}
          />
        )}
        <span className={` ${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default ThemeTogglerBar;
