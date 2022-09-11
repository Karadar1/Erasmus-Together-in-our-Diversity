import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function OnlineActivities() {
  const handleNavigation = (key) => {
    switch (key) {
      case "bookDay":
        window.open(
          "https://read.bookcreator.com/6MFaJcntmOZWJAEv4hllWayRYZi2/R28FREbJS0aoIdbVbx3lmg",
          "_blank"
        );
        break;
        case "musicDay":
          window.open(
            "https://www.youtube.com/playlist?list=PLT3QSesIDsmsBkL5kzCfg5m3Kd5esLYse",
            "_blank"
          );
          break;
          case "womensDay":
            window.open(
              "https://padlet.com/proyectoserasmusfeijoo/k103sfn6negm",
              "_blank"
            );
            break;

    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="daysWrapper">
        <h1 className="aboutHeaderOnlineActivities">Online Activities</h1>

        <div className="days">
          <div className="oneDay">
            <h3 className="mainTitleRomania">APRIL 2021: WORLD BOOK DAY</h3>
            <div className="mainBody">
              On the occasion of World Book Day, which we celebrate this week
              and which is also the Day of the English Language, we have chosen
              a sonnet by William Shakespeare, the most famous English writer.
              We invite our students to recite this poem in different official
              languages of the European Union.
            </div>
            <Button
              variant="text"
              size="medium"
              onClick={() => handleNavigation("bookDay")}
            >
              Learn more...
            </Button>
          </div>
          <div className="oneDay">
            <h3 className="mainTitleRomania">Music for Europe Day</h3>
            <div className="mainBody">
              Today is Europe Day and we want to celebrate
              it sharing our favourite music. Here you can find the link to the
              playlist with all the songs chosen by the students of your age
              involved in all our Erasmus projects. You will find songs from:
              Austria, Finland, Italy, Latvia, Poland, Rumania and Spain.
            </div>
            <Button
              variant="text"
              size="medium"
              onClick={() => handleNavigation("musicDay")}
            >
              Listen to the playlist
            </Button>
          </div>
          <div className="oneDay">
            <h3 className="mainTitleRomania">MARCH 2021: International Women's Day</h3>
            <div className="mainBody">
             March 8 is International Women's Day and our school want to share what they have done to celebrate this special day. We have posted this on a Padlet wall. Here is the link
            </div>
            <Button
              variant="text"
              size="medium"
              onClick={() => handleNavigation("womensDay")}
            >
              Learn more...
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlineActivities;
