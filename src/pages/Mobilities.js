import React from 'react';
import Italy from '../assets/it.svg';
import Romania from '../assets/ro.svg';
import Latvia from '../assets/lv.svg';
import Spania from '../assets/es.svg';
import Card from '../components/Card';
import { useNavigate } from "react-router-dom";



function Mobilities(props) {
 const navigate=useNavigate();
  return (
    <>
      <h1 className='aboutHeader'>Discover our mobilities</h1>
      <div className='countries'>
        <Card img={Spania} title='Spain ' onClick={()=>navigate('spain')} />
        <Card img={Italy} title='Italy' onClick={()=>navigate('italy')} />
        <Card img={Latvia} title='Letonia' onClick={()=>navigate('letonia')} />
        <Card img={Romania} title='Romania' onClick={()=>navigate('romania')} />
      </div>
    </>
  );
}

export default Mobilities;
