import { useState } from "react";
import BurgerMenu from "./burgerMenu/burgerMenu";
import "./header.scss";
import NavigationPanel from "./navigationPanel/NavigationPanel";


const Header = () => {
  const [burger, setBurger] = useState({'display': 'none'});
  return (
    <header>
      <div className="aligner header__aligner">
        <h1>Brooklyn Public Library</h1>
        <nav className="navigation-panel">
          <NavigationPanel />
        </nav>
        <div className="header__burger-and-profile"
          style={burger['display'] === 'none'? {'transform': 'translate(0rem)'}: {'transform': 'translate(0.6rem, -0.6rem)'}}
        >
          <img
            className="profile-icon"
            src="./assets/img/icons/icon_profile.svg"
            alt="Profile icon"
          />
          <img
            className="burger-menu"
            src={burger['display'] === 'none'? "./assets/img/icons/burger.svg": "./assets/img/icons/burger-cross.svg"}
            alt="burger menu"
            onClick={() => {
              if(burger['display'] === "none"){
                setBurger({'display': 'block'});
              }else{
                setBurger({'display': 'none'});
              }
            }}
          />
        </div>
      </div>
      <BurgerMenu burger={burger} />
    </header>
  );
};

export default Header;
