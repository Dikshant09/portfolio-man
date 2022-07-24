import './App.scss';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import ProjectItem from './components/ProjectItem/ProjectItem';

// import Footer from './components/Footer/Footer';

import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectItem />} />
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;