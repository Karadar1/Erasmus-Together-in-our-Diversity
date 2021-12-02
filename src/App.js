import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import Activities from './pages/Activities';
import Mobilities from './pages/Mobilities';

// components
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='activities' element={<Activities />} />
        <Route path='mobilities' element={<Mobilities />}></Route>
      </Routes>
    </>
  );
}
export default App;
