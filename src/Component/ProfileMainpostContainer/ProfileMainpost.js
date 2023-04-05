import React from 'react'
import './ProfileMainpost.css';
import Coverimage from '../Images/Profile.png'
import ContentPost from '../ContentPostContainer/contentpost';
import Post from '../PostContainer/Post';

export default function ProfileMainpost() {
  return (
    <div className='ProfileMainPostContainer'>
      <div>
        <img src={`${Coverimage}`} className="profilecoverimage" alt='' />
        <h2 style={{marginTop:-40, color:'white', textAlign:'start',marginLeft:'30px'}}>Your Profile</h2>
      </div>
      < ContentPost />
      <Post />
      <Post />
    </div>
  )
}
