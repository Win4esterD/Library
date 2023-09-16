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
  const [SignUpWindow, setSignUpWindow] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [authorisedUser, setAuthorisedUser] = useState('');

  function determineAuthorisedUser(){
    console.log("200 points");
    for (let key in localStorage) {
      if (
        localStorage.getItem(key) &&
        JSON.parse(localStorage.getItem(key))["authorised"] === true &&
        localStorage.getItem(key) !== undefined &&
        localStorage.getItem(key) !== null
      ) {
        const user = JSON.parse(localStorage.getItem(key));
        // user.visits += 1;
        setAuthorisedUser(user);
        setIsAuth(true);
        // localStorage.setItem(key, JSON.stringify(user));
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
          <Favorites/>
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
