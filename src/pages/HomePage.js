import React from 'react';
import { Route, Routes } from 'react-router';
import logo from '../assets/Romania1.png';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider/Slider';

function HomePage(props) {
  let navigate = useNavigate();

  return (
    <>
      <div className='homeContainer'>
        <div id='leftPart'>
          <div className='homeHeader'>
            <h1>
              Erasmus <span className='erasmusPlus1'>+</span> <br />
              Together in our diversity{' '}
            </h1>
            <img src={logo} alt='Logo image' id='logoImg' />
          </div>
          <div className='homeParagraph'>
            "Together in our diversity" is a two-year project that has been
            conceived to foster collaborationand innovation among four partner
            schools in different parts of Europe: Spain, Italy, Latvia and
            Romania. By carrying this project out transnationally, we wish to
            tackle the issue of socialinclusion from an European, broader,
            richer perspective which, no doubt, will make the projectoutcomes
            more widely valid and applicable to any other countries of our
            environment.
          </div>
          <div className='homeButtons'>
            <Button
              variant='outlined'
              size='large'
              onClick={() => navigate('about')}
            >
              Read More...
            </Button>

            <Button
              variant='contained'
              size='large'
              onClick={() => navigate('activities')}
            >
              Activities
            </Button>
          </div>
        </div>
        <div id='rightPart'>
          <Slider />
        </div>
      </div>
    </>
  );
}

export default HomePage;
