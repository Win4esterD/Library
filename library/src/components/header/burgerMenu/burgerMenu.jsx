
import NavigationPanel from "../navigationPanel/NavigationPanel";
import './burgerMenu.scss';

const BurgerMenu = ({burger}) => {
  return (
    <div className="burger-background" style={burger}>
      <NavigationPanel />
    </div>
  );
}

export default BurgerMenu;