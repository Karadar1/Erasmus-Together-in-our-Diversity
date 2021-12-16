import React from "react";
// Day 1
import img1 from "../../assets/mobilitiesPhotos/spainPhotos/img1.jpeg";
import img2 from "../../assets/mobilitiesPhotos/spainPhotos/img2.jpeg";
import img3 from "../../assets/mobilitiesPhotos/spainPhotos/img3.jpeg";
import img8 from "../../assets/mobilitiesPhotos/spainPhotos/img8.jpeg";
import img9 from "../../assets/mobilitiesPhotos/spainPhotos/img9.jpeg";
import img10 from "../../assets/mobilitiesPhotos/spainPhotos/img10.jpeg";
import img11 from "../../assets/mobilitiesPhotos/spainPhotos/img11.jpg";

// Day 2
import img4 from "../../assets/mobilitiesPhotos/spainPhotos/img4.jpg";
import img5 from "../../assets/mobilitiesPhotos/spainPhotos/img5.jpg";
import img6 from "../../assets/mobilitiesPhotos/spainPhotos/img6.JPG";

// Day 3
import img12 from "../../assets/mobilitiesPhotos/spainPhotos/img12.JPG";
import img13 from "../../assets/mobilitiesPhotos/spainPhotos/img13.JPG";
import img14 from "../../assets/mobilitiesPhotos/spainPhotos/img14.JPG";
import img15 from "../../assets/mobilitiesPhotos/spainPhotos/img15.JPG";
import img16 from "../../assets/mobilitiesPhotos/spainPhotos/img16.JPG";

const Spain = (props) => {
  return (
    <>
      <h1 className="aboutHeader">Spain: Migration, ethnicity, minorities</h1>
      {/* Day 1 */}

      <div className="dayContainer">
        <div style={{ width: "45%", marginLeft: "3vw" }}>
          <h2 className="dayHeader">First Day</h2>
          <ul className="aboutParagraph">
            Meeting at the Town Hall with the Teachers’ Council Representative
            City tour Gijon-Laboral University Tour of the school provided by
            the Spanish students.
            <b>Activities at school:</b>
            <li>the headteacher’s welcome speech</li>
            <li>marshmellow challenge</li>
            <li>schools’ presentations, followed by kahoot game</li>
            <li>
              logos presentation and voting the best logo(Winner Romanian team )
            </li>
          </ul>
        </div>

        <img src={img3} className="img1" />
        <img src={img8} className="img2" />
        <img src={img10} className="img2" />
        <img src={img11} className="img2" />
        <img src={img1} className="img2" />
        <img src={img2} className="img2" />
        <img src={img9} className="img2" />
      </div>
      <hr />
      {/* Day 2 */}
      <div className="dayContainer">
        <img src={img6} className="img1" />
        <div style={{ width: "45%", marginLeft: "3vw" }}>
          <h2 className="dayHeader">Second Day</h2>
          <ul
            className="aboutParagraph"
            style={{ width: "540px", fontSize: "18px" }}
          >
            Clasroom observations:
            <li>
              {" "}
              The students divided in teams attended classes of English, Maths,
              Physical Education and German
            </li>
            <li>Presentations and videos about diversity</li>
            <li>
              Group work about similarities and differences in their schools
              based on discussions , in mixed groups
            </li>
            Group activity:
            <li>
              Based on a given scenario, the students provide recommendations
              for the given situation
            </li>
            <li>
              The students receive information about the stop motion application
            </li>
            <li>
              {" "}
              In the afternoon, a group of mixed students. visit at the NGO ,
              „Mar de Niebla” and another one remains at school, having a
              discussion with an African man, about inclusion
            </li>
          </ul>
        </div>

        <img src={img5} className="img2" />
        <img src={img4} className="img2" />
      </div>
      <hr />
      {/* Day 3 */}
      <div className="dayContainer">
        <div style={{ width: "45%", marginLeft: "3vw" }}>
          <h2 className="dayHeader">Third Day</h2>
          <ul
            className="aboutParagraph"
            style={{ width: "540px", fontSize: "18px" }}
          >
            Trip to Oviedo:
            <li>
              Visit at the Church Santa Maria de Naranco and Church saint Miguel
              de Lillo
            </li>
            <li>Tour guide of Oviedo’s old town</li>
            <li>Visit at the Asturian cider museum , in Nava</li>
          </ul>
        </div>

        <img src={img12} className="img1" />
        <img src={img13} className="img2" />
        <img src={img14} className="img2" />
        <img src={img15} className="img2" />
        <img src={img16} className="img2" />
      </div>

      <hr />
      <div className="dayContainer">
        <div style={{ width: "45%", marginLeft: "3vw" }}>
          <h2 className="dayHeader">Forth Day</h2>
          <ul
            className="aboutParagraph"
            style={{ width: "540px", fontSize: "18px" }}
          >
            <li>
              At the Teachers’ Resource centre , the ss work in groups to create
              stop motion presentations , based on the given scenarios
            </li>
            <li>creating an interview with an immigrant , using Pod casts</li>
          </ul>
        </div>
        <div style={{ width: "45%", marginLeft: "3vw" }}>
          <h2 className="dayHeader">Fift Day</h2>
          <ul
            className="aboutParagraph"
            style={{ width: "540px", fontSize: "18px" }}
          >
            <li>
              Action bound application – Gymkana scan the code-treasure hunt
            </li>
            <li>
              Watching the videos with stop motion and listening to the
              interviewsPod casts
            </li>
            <li>Listening to a song composed by 3 Spanish students</li>
            <li>
              Feedback providing : On-site assessment google forms for students
              and teachers
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Spain;
