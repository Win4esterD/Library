import './styles/App.scss';
import './styles/mixins.scss';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import Favorites from './components/favorites/Favorites';


function App() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <About />
        <Favorites />
      </main>
    </>
  );
}

export default App;
