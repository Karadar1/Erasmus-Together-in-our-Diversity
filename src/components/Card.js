import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

function Card(props) {
  const navigate = useNavigate();

  return (
    <div className='cardComponent'>
      <h3 className='cardTitle'>{props.title}</h3>

      <div className='cardBody' onClick={() => {
              navigate(`${props.linkTo}`);
            }}>
        <img src={props.img} alt='' className='cardImg' />

       
      </div>
    </div>
  );
}

export default Card;
