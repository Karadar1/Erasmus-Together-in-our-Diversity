import React from 'react';
function Card(props) {

  return (
    <div className={props.className ? props.className : 'cardComponent'}>
      <h3 className='cardTitle'>{props.title}</h3>
      <div className='cardBody' onClick={props.onClick}>
            

        <img src={props.img} alt='' className='cardImg' />
        
       
      </div>
    </div>
  );
}

export default Card;
