import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
