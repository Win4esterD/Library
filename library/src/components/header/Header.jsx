import styles from './header.css';

const Header = () => {
  return (
    <header>
      <h1>Brooklyn Public Library</h1>
      <nav className="navigation-panel">
        <ul className="navigation-panel__elements-wrapper">
          <li className='navigation-panel__elements'>
            <a className="navigation-panel__links" href="#">About</a>
            </li>
          <li className='navigation-panel__elements'>
            <a className="navigation-panel__links" href="#">Favorites</a>
            </li>
          <li className='navigation-panel__elements'>
            <a className="navigation-panel__links" href="#">Coffee shop</a>
            </li>
          <li className='navigation-panel__elements'>
            <a className="navigation-panel__links" href="#">Contacts</a>
            </li>
          <li className='navigation-panel__elements'>
            <a className="navigation-panel__links" href="#">Library Card</a>
            </li>
        </ul>
      </nav>
      <img className="profile-icon" src="./assets/img/icons/icon_profile.svg" alt="Profile icon" />
    </header>
  )
}

export default Header;