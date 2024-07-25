import './App.css';
import Navbar from './comonents/Navbar';
import Home from './comonents/Home.jsx'
import About from './comonents/About.jsx';
import Skills from './comonents/Skills.jsx';
import Projects from './comonents/Projects.jsx';
import Contact from './comonents/Contact.jsx';
import Footer from './comonents/Footer.jsx';


function App() {
  return (
    <>
    
    <div className="w-screen flex  justify-center  ">
    <Navbar/>
    </div>
    
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
