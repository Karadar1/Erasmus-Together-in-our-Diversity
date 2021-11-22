import React from 'react';
import Target from '../assets/target-svgrepo-com.svg';

function About(props) {
  return (
    <>
      <h1 className='aboutHeader'>What is our goal</h1>
      <ul className='aboutParagraphs'>
        The project aims at providing an insight into the state of the matter in
        the four schools, in order toraise awareness among our educators and our
        students , and thus develop more dynamic andcommitted learning
        environments. While tackling social inclusion and students at
        adisadvantage, our main priority, we will focus on{' '}
        <span id='goalsSpan'> two other major goals:</span>
        <li>
          <img src={Target} alt='' className='targetIcon' />
          Develop competence in the English language, with a special attention
          to oral skills
        </li>
        <li>
          {' '}
          <img src={Target} alt='' className='targetIcon' />
          Improve the level of digital competence
        </li>
      </ul>
    </>
  );
}

export default About;
