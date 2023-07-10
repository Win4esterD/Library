import './styles/App.css';
import './styles/mixins.scss';
import Header from './components/header/Header';
import Greetings from './components/greetings/Greetings';
import About from './components/about/About';


function App() {
  return (
    <>
      <Header />
      <main>
        <Greetings />
        <About />
      </main>
    </>
  );
}

export default App;
