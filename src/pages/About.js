import React from "react";
import Target from "../assets/target-svgrepo-com.svg";
import teachersMeeting1 from "../assets/teachersMeeting1.jpg";
import teachersMeeting2 from "../assets/teachersMeeting2.jpg";

function About(props) {
  return (
    <div>
      <div style={{display:'inline-block'}}>

      <div className="informationBlock">
        <h1 className="aboutHeader">What is our goal</h1>
        <ul className="aboutParagraph">
          The project aims at providing an insight into the state of the matter
          in the four schools, in order toraise awareness among our educators
          and our students , and thus develop more dynamic andcommitted learning
          environments. While tackling social inclusion and students at
          adisadvantage, our main priority, we will focus on{" "}
          <span className="goalsSpan"> two other major goals:</span>
          <li>
            <img src={Target} alt="" className="targetIcon" />
            Develop competence in the English language, with a special attention
            to oral skills
          </li>
          <li>
            {" "}
            <img src={Target} alt="" className="targetIcon" />
            Improve the level of digital competence
          </li>
        </ul>
      </div>
      <div
        className="informationBlock"
        style={{ marginRight: 0, width: "700px" }}
      >
        <h1 className="aboutHeader">Who we adress</h1>
        <ul className="aboutParagraph" style={{ width: "100%" }}>
          Our target groups are secondary schoolstudents aged 14-17, who will
          have the opportunity of taking active part in a multilateral
          projectthat they would otherwise have no access to, given their
          particular social, economic or academic disadvantage. Such opportunity
          will broaden their minds and it will increase their Europeansense of
          belonging, preventing racist, intolerant and chauvinistic behaviors.
          The project is based on the analysis of four main topics both through
          collaborative work on the eTwinning platformand by means of four
          short-term group exchanges
          <span className="goalsSpan"> four short-term group exchanges</span>
          <li>
            <img src={Target} alt="" className="targetIcon" />
            Migration, ethnicity, minorities
          </li>
          <li>
            {" "}
            <img src={Target} alt="" className="targetIcon" />
            Abilities, disabilities, gifted students, specific programs.
          </li>
          <li>
            {" "}
            <img src={Target} alt="" className="targetIcon" />
            Gender diversity, stereotyped images, sexuality.
          </li>
          <li>
            {" "}
            <img src={Target} alt="" className="targetIcon" />
            Cultural and linguistic diversity, EU values and challenges.
          </li>
        </ul>
      </div>

      <div
        className="informationBlock"
        style={{ marginRight: 0, width: "1080px" }}
      >
        <h1 className="aboutHeader">Our Team</h1>
        <ul className="aboutParagraph" style={{ width: "100%" }}>
          Apart from the exchanges, three staff training events have been
          planned to offer participatin gteachers some professional development
          on areas which are essential to guarantee the successand
          sustainability of the project: eTwinning, ICT and dissemination
          strategies. An initialassessment conducted by each of the
          participating schools has allowed us to identify our Call 2019 Round 1
          KA2 - Cooperation for innovation and the exchange of good practices
          KA229 -School Exchange Partnerships FormId KA229-601BEBB9 Deadline
          (Brussels Time) 21 Mar2019 12:00:00 EN 4 / 105 needs and ??
          <span className="goalsSpan"> set the following goals:</span>
          <li>
            <img src={Target} alt="" className="targetIcon" />
            To foster social inclusion and to prevent early school dropout among
            socially disadvantagedstudents.
          </li>
          <li>
            {" "}
            <img src={Target} alt="" className="targetIcon" />
            To promote social and civic, digital and intercultural competences
            as well as foreign languagelearning.
          </li>
          <li>
            {" "}
            <img src={Target} alt="" className="targetIcon" />
            To develop the participants' oral skills in English through virtual
            media and face to facemeetings.
          </li>
          <li>
            {" "}
            <img src={Target} alt="" className="targetIcon" />
            To study from an analytical, critical perspective the issue of
            social inclusion in severalEuropean countries different in their
            social nature, as well as in language and culture, in order tofind
            common ground among the four partners regarding the social
            challenges that each of usfaces.
          </li>
          <li>
            {" "}
            <img src={Target} alt="" className="targetIcon" />
            To come up with tools and resources which will enable us to prevent,
            deal with and solve theproblems that our societies and school
            communities face due to social and ethnic diversity,migration flows
            and socio-economic differences.
          </li>
          <li>
            {" "}
            <img src={Target} alt="" className="targetIcon" />
            To encourage the use of eTwinning as an instrument to develop
            quality projects in education.
          </li>
        </ul>
      </div>
      </div>

      <div className="meetingPhotos">
        <div>
          <h3> Teacher's meeting , in Gijon Spain October 2019</h3>
          <img src={teachersMeeting1} id='meeting1'/>
        </div>
        <div>
          <h3> Teacher's meeting , in Salerno Italy October 2021</h3>
          <img src={teachersMeeting2} id='meeting2'/>
        </div>
      </div>
    </div>
  );
}

export default About;
