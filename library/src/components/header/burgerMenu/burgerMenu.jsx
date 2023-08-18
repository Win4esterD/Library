import NavigationPanel from "../navigationPanel/NavigationPanel";
import "./burgerMenu.scss";
import { useRef } from "react";

const BurgerMenu = ({ burger, setBurger}) => {
  const burgerBackground = useRef(7);

  return (
    <div
      className="burger-background"
      style={burger}
      onClick={(event) => event.stopPropagation()}
      ref={burgerBackground}
    >
      <NavigationPanel setBurger={setBurger} />
    </div>
  );
};

export default BurgerMenu;
