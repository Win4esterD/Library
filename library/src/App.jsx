import './styles/App.scss';
import './styles/mixins.scss';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import Favorites from './components/favorites/Favorites';
import CoffeShop from './components/coffeShop/CoffeShop';
import Contacts from './components/contacts/Contacts';


function App() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <About />
        <Favorites />
        <CoffeShop />
        <Contacts />
      </main>
    </>
  );
}

export default App;
