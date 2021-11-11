import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
     

      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  );
}
export default App;
