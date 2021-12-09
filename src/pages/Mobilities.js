import React from 'react';
import Italy from '../assets/it.svg';
import Romania from '../assets/ro.svg';
import Latvia from '../assets/lv.svg';
import Spania from '../assets/es.svg';
import Card from '../components/Card';


function Mobilities(props) {
  return (
    <>
      <h1 className='aboutHeader'>Discover our mobilities</h1>
      <div className='countries'>
        <Card img={Spania} title='Spain ' linkTo='spain' />
        <Card img={Italy} title='Italy' linkTo='italy' />
        <Card img={Latvia} title='Letonia' linkTo='letonia' />
        <Card img={Romania} title='Romania' linkTo='romania' />
      </div>
    </>
  );
}

export default Mobilities;
