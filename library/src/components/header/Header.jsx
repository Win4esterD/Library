import styles from './header.scss';

const Header = () => {
  return (
    <header>
      <div className="aligner header__aligner">
        <h1>Brooklyn Public Library</h1>
        <nav className="navigation-panel">
          <ul className="navigation-panel__elements-wrapper">
            <li className='navigation-panel__elements'>
              <a className="navigation-panel__links" href="#about">About</a>
              </li>
            <li className='navigation-panel__elements'>
              <a className="navigation-panel__links" href="#favorites">Favorites</a>
              </li>
            <li className='navigation-panel__elements'>
              <a className="navigation-panel__links" href="#coffe-shop">Coffee shop</a>
              </li>
            <li className='navigation-panel__elements'>
              <a className="navigation-panel__links" href="#contacts">Contacts</a>
              </li>
            <li className='navigation-panel__elements'>
              <a className="navigation-panel__links" href="#library-card">Library Card</a>
              </li>
          </ul>
        </nav>
        <div className="header__burger-and-profile">
          <img className="profile-icon" src="./assets/img/icons/icon_profile.svg" alt="Profile icon" />
          <img className="burger-menu" src="./assets/img/icons/burger.svg" alt="burger menu" />
        </div>
      </div>
    </header>
  )
}

export default Header;