import React from 'react'
import './rightside.css';
import ads from '../Images/ads.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';
import image1 from '../Images/image1.jpg';
import adduser from '../Images/add-user.png';
export default function rightside() {
  return (
    <div className='Rightbar'>
      <div className='rightcontainer'>
        <div className='adsContainer'>
          <img src={`${ads}`} className='adsimg' alt='' />
          <div>
          <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={`${image2}`} className='adsimg' alt='' />
          <div>
          <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
          <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>

        <div className='rightcontainer2'>
          <h3 style={{textAlign:'start' , marginLeft:'10px'}}>Suggested for you</h3>
          <div style={{marginTop:'-10px'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image2}`} className='Profileimage' alt="" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign:'start' }}>S_I_P_I</p>
                  <p style={{ marginLeft: '10px', textAlign:'start', marginTop:'-16px', fontSize:'11px', color:'#aaa' }}>Suggested for you</p>
                </div>
              </div>
              <div style={{ backgroundColor: '#aaa', padding: '9px', marginRight: '13px', borderRadius: '50%', cursor:'pointer' }}>
                <img src={`${adduser}`} className="addfriend" alt="" />
              </div>
            </div>
          </div>
          <div style={{marginTop:'-10px'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image3}`} className='Profileimage' alt="" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign:'start' }}>Chiku@Miku</p>
                  <p style={{ marginLeft: '10px', textAlign:'start', marginTop:'-16px', fontSize:'11px', color:'#aaa' }}>Followed by S_I_P_I</p>
                </div>
              </div>
              <div style={{ backgroundColor: '#aaa', padding: '9px', marginRight: '13px', borderRadius: '50%', cursor:'pointer'}}>
                <img src={`${adduser}`} className="addfriend" alt="" />
              </div>
            </div>
          </div>
          <div style={{marginTop:'-10px'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image4}`} className='Profileimage' alt="" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign:'start' }}>PINKU17</p>
                  <p style={{ marginLeft: '10px', textAlign:'start', marginTop:'-16px', fontSize:'11px', color:'#aaa' }}>Suggested for you</p>
                </div>
              </div>
              <div style={{ backgroundColor: '#aaa', padding: '9px', marginRight: '13px', borderRadius: '50%', cursor:'pointer' }}>
                <img src={`${adduser}`} className="addfriend" alt="" />
              </div>
            </div>
          </div>
          <div style={{marginTop:'-10px'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image1}`} className='Profileimage' alt="" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign:'start' }}>h@ney M@dhu</p>
                  <p style={{ marginLeft: '10px', textAlign:'start', marginTop:'-16px', fontSize:'11px', color:'#aaa' }}>Suggested for you</p>
                </div>
              </div>
              <div style={{ backgroundColor: '#aaa', padding: '9px', marginRight: '13px', borderRadius: '50%', cursor:'pointer' }}>
                <img src={`${adduser}`} className="addfriend" alt="" />
              </div>
            </div>
          </div>
          <div style={{marginTop:'-10px'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image5}`} className='Profileimage' alt="" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign:'start' }}>SuRyA Sun</p>
                  <p style={{ marginLeft: '10px', textAlign:'start', marginTop:'-16px', fontSize:'11px', color:'#aaa' }}>Suggested for you</p>
                </div>
              </div>
              <div style={{ backgroundColor: '#aaa', padding: '9px', marginRight: '13px', borderRadius: '50%', cursor:'pointer' }}>
                <img src={`${adduser}`} className="addfriend" alt="" />
              </div>
            </div>
          </div>
          <div style={{marginTop:'-10px'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image6}`} className='Profileimage' alt="" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign:'start' }}>Devil D!mak</p>
                  <p style={{ marginLeft: '10px', textAlign:'start', marginTop:'-16px', fontSize:'11px', color:'#aaa' }}>Suggested for you</p>
                </div>
              </div>
              <div style={{ backgroundColor: '#aaa', padding: '9px', marginRight: '13px', borderRadius: '50%', cursor:'pointer' }}>
                <img src={`${adduser}`} className="addfriend" alt="" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}
