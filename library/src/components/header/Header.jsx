import { useState } from "react";
import BurgerMenu from "./burgerMenu/burgerMenu";
import "./header.scss";
import NavigationPanel from "./navigationPanel/NavigationPanel";

const Header = () => {
  const [burger, setBurger] = useState({ transform: "translateY(-200%)" });

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
          <NavigationPanel />
        </nav>
        <div
          className="header__burger-and-profile"
        >
          <img
            className="profile-icon"
            src="./assets/img/icons/icon_profile.svg"
            alt="Profile icon"
            onClick={(event) => event.stopPropagation()}
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
