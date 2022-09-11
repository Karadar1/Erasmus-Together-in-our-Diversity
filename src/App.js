import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import Activities from './pages/activities/ActivitiesIndex';
import Mobilities from './pages/Mobilities';

//Mobilities pages
import Spain from './pages/mobilities/Spain';
import Italy from './pages/mobilities/Italy';
import Letonia from './pages/mobilities/Letonia';
import Romania from './pages/mobilities/Romania';

//Activities pages
import ActivitiesPage from './pages/activities/ActivitiesPage'
import Library from './pages/activities/Library';
import OnlineActivities from './pages/activities/OnlineActivities';

// components
import { Navbar } from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='activities'>
          <Route index element={<Activities />} />
          <Route path='activitiesPage' element={<ActivitiesPage/>}/>
          <Route path='onlineActivities' element={<OnlineActivities/>}/>
          <Route path='library' element={<Library/>}/>
        </Route>
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
