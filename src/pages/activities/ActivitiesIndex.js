import React from "react";
import Card from '../../components/Card';
import file from '../../assets/activitiesPhotos/file_1.svg'
import group from '../../assets/activitiesPhotos/group_1.svg'
import pc from '../../assets/activitiesPhotos/pc_1.svg'
import { useNavigate, useHref } from "react-router-dom";

// 'https://read.bookcreator.com/vioXrdTQ5PTzr153t8yT2G4CXiH2/nXYMVtcYQfybRf6kQRCLJA' 
function Activities(props) {
  const navigate = useNavigate();
  const praa = useHref('https://read.bookcreator.com/vioXrdTQ5PTzr153t8yT2G4CXiH2/nXYMVtcYQfybRf6kQRCLJA');
  console.log(praa)
  const handleNavigation = (key)=>{
    switch(key) { 
      case 'activities': 
      navigate('activitiesPage')
      
      break;
    case 'online_activities':
      // window.open(
      //   'https://read.bookcreator.com/vioXrdTQ5PTzr153t8yT2G4CXiH2/nXYMVtcYQfybRf6kQRCLJA',
      //   '_blank' 
      // );
      navigate('onlineActivities')

      break;
    case 'our_library':
      navigate('library')
      break;
  }
  }

  return (
    <>
      <h1 className="aboutHeader">Discover our activities</h1>
      <div className="countries">
        <Card img={group} title="Activities" onClick={()=>handleNavigation('activities')} className='activitiesCard' />
        <Card img={pc} title="Online Activities"  onClick={()=>handleNavigation('online_activities')} className='activitiesCard' />
        <Card img={file} title="Our Library" onClick={()=>handleNavigation('our_library')} className='activitiesCard'/>
      </div>
    </>
  );
}

export default Activities;
