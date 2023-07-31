import NavigationPanel from "../navigationPanel/NavigationPanel";
import "./burgerMenu.scss";
import { useRef, useEffect } from "react";

const BurgerMenu = ({ burger }) => {
  const burgerBackground = useRef(7);

  return (
    <div
      className="burger-background"
      style={burger}
      onClick={(event) => event.stopPropagation()}
      ref={burgerBackground}
    >
      <NavigationPanel />
    </div>
  );
};

export default BurgerMenu;
