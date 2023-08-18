import "./signUpMenu.scss";
import { useState, useEffect } from "react";

const SingUpMenu = ({ profileIcon, setBurger, burger }) => {
  const [menuHeight, setMenuHeight] = useState("0px");

  useEffect(() => {
    const handleClick = (event) => {
      event.stopPropagation();
      if (menuHeight === "0px") {
        setMenuHeight("7.1875rem");
      } else if (menuHeight === "7.1875rem") {
        setMenuHeight("0px");
      }
      setBurger({ transform: "translateY(-200%)" });
    };

    const profile = profileIcon.current;
    document.body.addEventListener("click", () => setMenuHeight("0px"));

    if (burger.transform !== "translateY(-200%)") {
      setMenuHeight("0px");
    }
    profile.addEventListener("click", handleClick);
    return () => {
      profile.removeEventListener("click", handleClick);
    };
  }, [menuHeight, profileIcon, burger, setBurger]);

  return (
    <div className="sign-up-menu" style={{ height: menuHeight }} onClick={(e) => e.stopPropagation()}>
      <p className="sign-up-menu__profile">Profile</p>
      <hr className="sign-up-menu__separation-line" />
      <p className="sign-up-menu__option" onClick={() => setMenuHeight("0px")}>Log In</p>
      <p className="sign-up-menu__option" onClick={() => setMenuHeight("0px")}>Register</p>
    </div>
  );
};

export default SingUpMenu;
