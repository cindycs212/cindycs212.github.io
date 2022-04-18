import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';

function App() {

  return (
    <div className='App'>
      <Header />
      <div className='sections'>
        <Home />
        <Portfolio />
        <Experience />
      </div>
    </div>
  );
}

export default App;
