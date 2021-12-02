import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

function Card(props) {
  const navigate = useNavigate();

  return (
    <div className='cardComponent'>
      <h3 className='cardTitle'>{props.title}</h3>

      <div className='cardBody'>
        <img src={props.img} alt='' className='cardImg' />

        <div className='lowerCard'>
          <span>Descption if needed</span>
          <Button
            variant='contained'
            onClick={() => {
              navigate(`${props.linkTo}`);
            }}
            className='cardButton'
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
