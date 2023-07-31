import './navigationPanel.scss';

const NavigationPanel = () => {
  return (
    <>
      <ul className="navigation-panel__elements-wrapper">
        <li className="navigation-panel__elements">
          <a className="navigation-panel__links" href="#about">
            About
          </a>
        </li>
        <li className="navigation-panel__elements">
          <a className="navigation-panel__links" href="#favorites">
            Favorites
          </a>
        </li>
        <li className="navigation-panel__elements">
          <a className="navigation-panel__links" href="#coffe-shop">
            Coffee shop
          </a>
        </li>
        <li className="navigation-panel__elements">
          <a className="navigation-panel__links" href="#contacts">
            Contacts
          </a>
        </li>
        <li className="navigation-panel__elements">
          <a className="navigation-panel__links" href="#library-card">
            Library Card
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavigationPanel;