import React from "react";
import Card from '../../components/Card';
import file from '../../assets/activitiesPhotos/file_1.svg'
import group from '../../assets/activitiesPhotos/group_1.svg'
import pc from '../../assets/activitiesPhotos/pc_1.svg'



function Activities(props) {
  return (
    <>
      <h1 className="aboutHeader">Discover our activities</h1>
      <div className="countries">
        <Card img={file} title="Activities" linkTo="activitiesPage" />
        <Card img={group} title="Online Activities" linkTo="italy" />
        <Card img={pc} title="Our Library" linkTo="letonia" />
      </div>
    </>
  );
}

export default Activities;
