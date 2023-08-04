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


function App() {
  console.log('50 points');
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <About />
        <Favorites />
        <CoffeShop />
        <Contacts />
        <LibraryCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
