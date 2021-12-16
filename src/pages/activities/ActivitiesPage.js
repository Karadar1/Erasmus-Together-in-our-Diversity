import React from "react";
import marshmellow from "../../assets/activitiesPhotos/marshmellow.jpg";
import img11 from "../../assets/mobilitiesPhotos/spainPhotos/img11.jpg";
import logoContest from "../../assets/activitiesPhotos/logoContest.jpg";
import Romania1 from '../../assets/Romania1.png'

export default function ActivitiesPage() {
  return (
    <>
    {/* Marshmellow Contest */}
      <div className="activity">
        <div style={{width:'700px'}}>
          <h3 className="activityHeader">D. MARSHMALLOW CHALLENGE</h3>
          <div className="activityParagraph">
            On Monday afternoon we all met at the library for several group
            activities. We started with a Marshmallow challenge. In this
            challenge a team is given a handful of supplies to work with (20
            sticks of spaguetti, one yard of string, tape and one marshmallow).
            Each team is given 18 minutes to build the tallest possible tower
            that can support a marshmallow.
          </div>
          <div id="divLeft">
            <h3>Winners</h3>
            <img src={img11} />
          </div>
        </div>
        <img src={marshmellow} className="activityImg" />
      </div>
      <hr/>
      {/* Logo Contest */}
      <>
         <div className="activity">

      <div>
      <h3 className="activityHeader">D. MARSHMALLOW CHALLENGE</h3>

        <img src={logoContest}/>
      </div>
    
         <div id="divLeft">
            <h1 style={{textAlign:'center'}}>Winner Logo</h1>
            <img src={Romania1} />
          </div>
         </div>
      </>
    </>
  );
}
