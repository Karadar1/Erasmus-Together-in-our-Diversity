import React from "react";
import Button from "@mui/material/Button";
function Library(props) {

  const handleNavigation = (key) => {
    switch (key) {
      case "onlineActivities":
        window.open(
          "https://read.bookcreator.com/vioXrdTQ5PTzr153t8yT2G4CXiH2/nXYMVtcYQfybRf6kQRCLJA",
          "_blank"
        );
        break;
        case "workshops":
          window.open(
            "https://togetherdiversityerasmus.blogspot.com/2022/04/exchange-students-timisoara-workshops.html",
            "_blank"
          );
          break;
        // case "musicDay":
        //   window.open(
        //     "https://www.youtube.com/playlist?list=PLT3QSesIDsmsBkL5kzCfg5m3Kd5esLYse",
        //     "_blank"
        //   );
        //   break;
        //   case "womensDay":
        //     window.open(
        //       "https://padlet.com/proyectoserasmusfeijoo/k103sfn6negm",
        //       "_blank"
        //     );
        //     break;

    }
  };

  return (
    <>
    <div className="mainBodyLibrary">

      <h1>Useful Links</h1>
      <ul className="linksList">
        <li> Online Activities during pandemic   <Button
              variant="text"
              size="medium"
              onClick={() => handleNavigation("onlineActivities")}
            >
              Learn more...
            </Button></li>
            <li> EXCHANGE STUDENTS TIMISOARA - WORKSHOPS   <Button
              variant="text"
              size="medium"
              onClick={() => handleNavigation("workshops")}
            >
              Learn more...
            </Button></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>

    </>
  );
}

export default Library;
