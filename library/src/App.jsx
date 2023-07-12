import './styles/App.scss';
import './styles/mixins.scss';
import Header from './components/header/Header';
import Greetings from './components/greetings/Greetings';
import About from './components/about/About';
import Favorites from './components/favorites/Favorites';


function App() {
  return (
    <>
      <Header />
      <main>
        <Greetings />
        <About />
        <Favorites />
      </main>
    </>
  );
}

export default App;
