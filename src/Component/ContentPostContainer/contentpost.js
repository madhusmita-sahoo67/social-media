import React from 'react'
import './contentpost.css';
import profileimage from '../Images/Profile.png';
import imageIcon from '../Images/gallery.png';
import emojiIcon from '../Images/cat-face.png';
import VideoIcon from '../Images/video.png';

export default function contentpost() {
  return (
    <div>
      <div className='ContentUploadContainer'>
        <div style={{ display: "flex", alignitem: "center", padding: 10 }}>
          <img src={`${profileimage}`} className="profileimg" alt="" />
          <input type="text" className='contentWritting' placeholder='write your thought' />
        </div>
        <div style={{ display: 'flex',justifyContent:'space-between' }}>
          <div>
            <img src={`${imageIcon}`} className="icons" alt="" />
            <img src={`${emojiIcon}`} className="icons" alt="" />
            <img src={`${VideoIcon}`} className="icons" alt="" />
          </div>
          <button style={{height:"30px" ,marginRight:"12px",marginTop:"35px", paddingLeft:"20px" , paddingRight:"20px" , paddingTop:6 , paddingBottom:6 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"5px" , cursor:"pointer"}}>Post</button>
        </div>
      </div>
    </div>
  )
}
