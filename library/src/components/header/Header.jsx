import { useState, useRef, useContext } from "react";
import BurgerMenu from "./burgerMenu/burgerMenu";
import "./header.scss";
import NavigationPanel from "./navigationPanel/NavigationPanel";
import SingUpMenu from "./signUpMenu/singUpMenu";
import {regMenuContext} from '../../context/regMenuContext';


const Header = () => {
  const [burger, setBurger] = useState({ transform: "translateY(-200%)" });
  const profileIcon = useRef(7);
  const { isAuth } = useContext(regMenuContext);

  window.onresize = () => {
    if (window.innerWidth > 1026) {
      setBurger({ transform: "translateY(-200%)" });
    }
  };

  document.body.addEventListener("click", (event) => {
    if (burger["transform"] === "translateY(0%)") {
      setBurger({ transform: "translateY(-200%)" });
    }
  });

  return (
    <header>
      <div className="aligner header__aligner">
        <h1>Brooklyn Public Library</h1>
        <nav className="navigation-panel">
          <NavigationPanel setBurger={setBurger} />
        </nav>
        <div className="header__burger-and-profile">
          <div className="profile-img-wrapper" ref={profileIcon}>
            <img
              className="profile-icon"
              src="./assets/img/icons/icon_profile.svg"
              alt="Profile icon"
            />
          </div>
          <SingUpMenu
            profileIcon={profileIcon}
            setBurger={setBurger}
            burger={burger}
          />
          <img
            className="burger-menu"
            src={
              burger["transform"] === "translateY(-200%)"
                ? "./assets/img/icons/burger.svg"
                : "./assets/img/icons/burger-cross.svg"
            }
            alt="burger menu"
            onClick={(event) => {
              event.stopPropagation();
              if (burger["transform"] === "translateY(-200%)") {
                setBurger({ transform: "translateY(0%)" });
              } else {
                setBurger({ transform: "translateY(-200%)" });
              }
            }}
          />
        </div>
      </div>
      <BurgerMenu burger={burger} setBurger={setBurger} />
    </header>
  );
};

export default Header;
