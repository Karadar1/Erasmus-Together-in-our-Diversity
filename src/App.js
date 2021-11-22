import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Activities from './pages/Activities';
import Trips from './pages/Trips';

import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='activities' element={<Activities />} />
        <Route path='mobilities' element={<Trips />} />
      </Routes>
    </>
  );
}
export default App;
