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
import Spain from './pages/mobilities/Spain';
import Italy from './pages/mobilities/Italy';
import Letonia from './pages/mobilities/Letonia';
import Romania from './pages/mobilities/Romania';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='activities' element={<Activities />} />
        <Route path='mobilities' >
          <Route index element={<Mobilities />}/>
          <Route path='spain' element={<Spain/>}/>
          <Route path='italy' element={<Italy/>}/>
          <Route path='romania' element={<Romania/>}/>
          <Route path='letonia' element={<Letonia/>}/>

        </Route>
      </Routes>
    </>
  );
}
export default App;
