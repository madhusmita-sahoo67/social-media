import React from 'react'
import "./Profile.css";
import Navbar from '../../Component/Navbar/Navbar';
import ProfileMainpost from '../../Component/ProfileMainpostContainer/ProfileMainpost';
import ProfileLeftside from '../../Component/ProfileLeftsideContainer/ProfileLeftside';
import ProfileRightside from '../../Component/ProfileRightsideContainer/ProfileRightside';


export default function Profile() {
  return (
    <div className='profileContainer'>
        <Navbar />
        <div className='subProfileContainer'>
            <ProfileLeftside />
            <ProfileMainpost />
            <ProfileRightside/>
        </div>
    </div>
  )
}
