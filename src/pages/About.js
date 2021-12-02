import React from 'react';
import Target from '../assets/target-svgrepo-com.svg';

function About(props) {
  return (
    <>
      <div className='informationBlock'>
        <h1 className='aboutHeader'>What is our goal</h1>
        <ul className='aboutParagraphs'>
          The project aims at providing an insight into the state of the matter
          in the four schools, in order toraise awareness among our educators
          and our students , and thus develop more dynamic andcommitted learning
          environments. While tackling social inclusion and students at
          adisadvantage, our main priority, we will focus on{' '}
          <span className='goalsSpan'> two other major goals:</span>
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
      </div>
      <div className='informationBlock'>
        <h1 className='aboutHeader'>Who we adress</h1>
        <ul className='aboutParagraphs'>
          Our target groups are secondary schoolstudents aged 14-17, who will
          have the opportunity of taking active part in a multilateral
          projectthat they would otherwise have no access to, given their
          particular social, economic or academic disadvantage. Such opportunity
          will broaden their minds and it will increase their Europeansense of
          belonging, preventing racist, intolerant and chauvinistic behaviors.
          The project is based on the analysis of four main topics both through
          collaborative work on the eTwinning platformand by means of four
          short-term group exchanges
          <span className='goalsSpan'> four short-term group exchanges</span>
          <li>
            <img src={Target} alt='' className='targetIcon' />
            Migration, ethnicity, minorities
          </li>
          <li>
            {' '}
            <img src={Target} alt='' className='targetIcon' />
            Abilities, disabilities, gifted students, specific programs.
          </li>
          <li>
            {' '}
            <img src={Target} alt='' className='targetIcon' />
            Gender diversity, stereotyped images, sexuality.
          </li>
          <li>
            {' '}
            <img src={Target} alt='' className='targetIcon' />
            Cultural and linguistic diversity, EU values and challenges.
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
