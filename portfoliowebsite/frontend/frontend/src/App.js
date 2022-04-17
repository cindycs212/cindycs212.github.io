import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
// import './assets/css/fonts.css';


function App() {

  return (
    <div className='App'>
      <Header />
      <div className='sections'>
        <Home />
        <Portfolio />
        <Experience />
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
