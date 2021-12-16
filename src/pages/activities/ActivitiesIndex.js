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
        <Card img={group} title="Activities" linkTo="activitiesPage" className='activitiesCard' />
        <Card img={pc} title="Online Activities" linkTo="italy" className='activitiesCard'/>
        <Card img={file} title="Our Library" linkTo="letonia" className='activitiesCard'/>
      </div>
    </>
  );
}

export default Activities;
