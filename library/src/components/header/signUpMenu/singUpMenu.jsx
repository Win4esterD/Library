import "./signUpMenu.scss";
import { useState, useEffect, useContext } from "react";
import { regMenuContext } from "../../../context/regMenuContext";

const SingUpMenu = ({ profileIcon, setBurger, burger }) => {
  const [menuHeight, setMenuHeight] = useState("0px");
  const {
    setRegMenu,
    setSignUpWindow,
    isAuth,
    setIsAuth,
    authorisedUser,
    setAuthorisedUser,
  } = useContext(regMenuContext);

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

  const logOut = () => {
    const userEmail = authorisedUser.email;
    const userData = JSON.parse(localStorage.getItem(userEmail));
    userData["authorised"] = false;
    localStorage.setItem(userEmail, JSON.stringify(userData));

    setIsAuth(false);
    setAuthorisedUser("");
  };

  return (
    <div
      className="sign-up-menu"
      style={{ height: menuHeight }}
      onClick={(e) => e.stopPropagation()}
    >
      <p className="sign-up-menu__profile" >
        {authorisedUser.cardNumber ? authorisedUser.cardNumber : "Profile"}
      </p>
      <hr className="sign-up-menu__separation-line" />
      <p
        className="sign-up-menu__option"
        onClick={(e) => {
          setMenuHeight("0px");
          setRegMenu("flex");
          setSignUpWindow(e.target.innerHTML);
        }}
      >
        {!isAuth ? "Log In" : "My profile"}
      </p>
      <p
        className="sign-up-menu__option"
        onClick={(e) => {
          if (e.target.innerHTML === "Register") {
            setMenuHeight("0px");
            setRegMenu("flex");
            setSignUpWindow(e.target.innerHTML);
          } else {
            logOut();
            setMenuHeight("0px");
          }
        }}
      >
        {!isAuth ? "Register" : "Log Out"}
      </p>
    </div>
  );
};

export default SingUpMenu;
