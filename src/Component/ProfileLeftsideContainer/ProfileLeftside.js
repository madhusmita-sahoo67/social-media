import React from 'react'
import './ProfileLeftside.css';
import image from "../Images/Profile.png";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import image7 from "../Images/image7.jpg";
import image8 from "../Images/image8.jpg";
import image9 from "../Images/image9.jpg";
import image10 from "../Images/image10.jpg";

export default function ProfileLeftside() {
    return (
        <div className='ProfileLeftside'>
            <div className='NotificationContainer'>
                <img src={`${image}`} className="profilepageCover" alt="" />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: -30 }}>
                    <img src={`${image4}`} className="profilepageimage" alt="" />
                    <div>
                        <p style={{ marginLeft: 6, marginTop: 21, color: 'black', textAlign: 'start' }}>Pinku</p>
                        <p style={{ marginLeft: 6, color: 'black', textAlign: 'start', marginTop: -16, fontSize: 11 }}>Website Developer</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ color: 'black', marginLeft: 20, fontSize: '14px' }}>Profile Views</p>
                    <p style={{ color: 'black', marginRight: 20, fontSize: '12px', marginTop: 17 }}>75779</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -20 }}>
                    <p style={{ color: 'black', marginLeft: 20, fontSize: '14px' }}>Followers</p>
                    <p style={{ color: 'black', marginRight: 20, fontSize: '12px', marginTop: 17 }}>9736</p>
                </div>
                <div style={{ marginTop: -20 }}>
                    <h5 style={{ color: 'black', marginLeft: 10, fontSize: '14px', marginRight: 30, marginTop: 30 , textAlign:'start'}}>User Bio</h5>
                    <p style={{ color: 'black', marginRight: '12px', fontSize: '12px', marginTop: -20, textAlign: 'start', marginLeft: '10px' }}>I would rather be despised of who am i,rather than loved by who i am not</p>
                </div>
                <button style={{ width: '100%', paddingTop: 7, paddingBottom: 7, border: 'none', backgroundColor: 'blueviolet', color: 'white' }}>Edit Bio</button>

            </div>
            <div className='NotificationContainer'>
                <h3>Followings</h3>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <p style={{marginLeft:10}}>Friends</p>
                    <p style={{marginRight:10, color:'#aaa'}}>See All</p>
                </div>
                <div style={{display:'flex', flexWrap:'wrap', marginLeft:5}}>
                    <div style={{marginLeft:4, cursor:'pointer'}}>
                       <img src={`${image5}`} className="friendimage" alt='' />
                        <p style={{marginTop:-2}}>Payal</p>
                    </div>
                    <div style={{marginLeft:4, cursor:'pointer'}}>
                        <img src={`${image6}`} className="friendimage" alt='' />
                        <p style={{marginTop:-2}}>Chhaya</p>
                    </div>
                    <div style={{marginLeft:4, cursor:'pointer'}}>
                        <img src={`${image7}`} className="friendimage" alt='' />
                        <p style={{marginTop:-2}}>Naman</p>
                    </div>
                    <div style={{marginLeft:4, cursor:'pointer'}}>
                       <img src={`${image8}`} className="friendimage" alt='' />
                        <p style={{marginTop:-2}}>Payal</p>
                    </div>
                    <div style={{marginLeft:4, cursor:'pointer'}}>
                        <img src={`${image9}`} className="friendimage" alt='' />
                        <p style={{marginTop:-2}}>Chhaya</p>
                    </div>
                    <div style={{marginLeft:4, cursor:'pointer'}}>
                        <img src={`${image10}`} className="friendimage" alt='' />
                        <p style={{marginTop:-2}}>Naman</p>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}