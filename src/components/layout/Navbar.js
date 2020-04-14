import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/theme/themeContext";

const Navbar = ({ icon, title }) => {
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContext;

  const [navbarClass, setNavbarClass] = useState("navbar bg-primary");
  const [buttonClass, setButtonClass] = useState("btn btn-light btn-block");

  useEffect(() => {
    console.log("theme is: ", theme);

    if (theme === "dark") {
      setNavbarClass("navbar bg-dark");
      setButtonClass("btn btn-dark btn-block");
    } else {
      setNavbarClass("navbar bg-primary");
      setButtonClass("btn btn-light btn-block");
    }
  }, [theme]);

  const changeTheme = () => {
    console.log("Changing theme...");
    toggleTheme();
  };

  return (
    <nav className={navbarClass}>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <input
            type="submit"
            value="Toggle Theme"
            className={buttonClass}
            onClick={changeTheme}
          />
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
