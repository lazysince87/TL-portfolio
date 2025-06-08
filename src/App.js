import './App.css';
import Sidebar from './components/sidebar/sidebar'
import Home from './components/home/home'
import About from './components/about/about'
//import Porfolio from './components/porfolio/porfolio'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
