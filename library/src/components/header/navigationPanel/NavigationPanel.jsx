import "./navigationPanel.scss";

const NavigationPanel = ({setBurger}) => {
  return (
    <>
      <ul className="navigation-panel__elements-wrapper">
        <li className="navigation-panel__elements">
          <a
            className="navigation-panel__links"
            href="#about"
            onClick={() => setBurger({ transform: "translateY(-200%)" })}
          >
            About
          </a>
        </li>
        <li className="navigation-panel__elements">
          <a
            className="navigation-panel__links"
            href="#favorites"
            onClick={() => setBurger({ transform: "translateY(-200%)" })}
          >
            Favorites
          </a>
        </li>
        <li className="navigation-panel__elements">
          <a
            className="navigation-panel__links"
            href="#coffe-shop"
            onClick={() => setBurger({ transform: "translateY(-200%)" })}
          >
            Coffee shop
          </a>
        </li>
        <li className="navigation-panel__elements">
          <a
            className="navigation-panel__links"
            href="#contacts"
            onClick={() => setBurger({ transform: "translateY(-200%)" })}
          >
            Contacts
          </a>
        </li>
        <li className="navigation-panel__elements">
          <a
            className="navigation-panel__links"
            href="#library-card"
            onClick={() => setBurger({ transform: "translateY(-200%)" })}
          >
            Library Card
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavigationPanel;
