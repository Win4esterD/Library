import './styles/App.scss';
import './styles/mixins.scss';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import Favorites from './components/favorites/Favorites';
import CoffeShop from './components/coffeShop/CoffeShop';
import Contacts from './components/contacts/Contacts';
import LibraryCard from './components/libraryCard/LibraryCard';
import Footer from './components/footer/Footer';
import RegMenu from './components/regMenu/RegMenu';
import { regMenuContext } from './context/regMenuContext';
import {useState, useEffect} from 'react';


function App() {
  const [regMenu, setRegMenu] = useState('none');
  // const [regMenu, setRegMenu] = useState('flex');
  const [SignUpWindow, setSignUpWindow] = useState('');
  // const [SignUpWindow, setSignUpWindow] = useState('My profile');
  const [isAuth, setIsAuth] = useState(false);
  const [authorisedUser, setAuthorisedUser] = useState('');

  function determineAuthorisedUser(){
    for (let key in localStorage) {
      if (
        localStorage.getItem(key) &&
        JSON.parse(localStorage.getItem(key))["authorised"] === true
      ) {
        setAuthorisedUser(JSON.parse(localStorage.getItem(key)));
        setIsAuth(true);
        break;
      }
    }
  }

  useEffect(determineAuthorisedUser, []);


  return (
    <>
      <regMenuContext.Provider
        value={{
          regMenu,
          setRegMenu,
          SignUpWindow,
          setSignUpWindow,
          isAuth,
          setIsAuth,
          authorisedUser,
          setAuthorisedUser,
        }}
      >
        <Header />
        <main>
          <RegMenu />
          <Welcome />
          <About />
          <Favorites />
          <CoffeShop />
          <Contacts />
          <LibraryCard />
        </main>
        <Footer />
      </regMenuContext.Provider>
    </>
  );
}

export default App;
