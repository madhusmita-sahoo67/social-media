import React from 'react'
import './leftside.css';
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";

export default function leftside() {
  return (
    <div className='Leftbar'>
        <div className='NotificationContainer'> 
            <div style={{display:'flex' , justifyContent:'space-around'}}>
              <p style={{marginLeft:'-14px'}}>Notification</p>
              <p style={{color:'#aaa', marginLeft:'40px'}}>See All</p>
            </div>
            <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
                <img src={`${image}`} className="notificationimg" alt="" />
                <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 , width:"120px" , textAlign:"start"}}>Madhu like your post</p>
                <img src={`${image1}`} className="likeimage" alt="" />
            </div>
            <div style={{display:'flex' , alignItems:'center',marginTop:-10}}>
                <img src={`${image2}`} className='notificationimg' alt='' />
                <p style={{marginLeft:'5px' ,color:'#aaa' , fontSize:13, textAlign:'start', width:'120px' }}>Chiku started following you</p>
                <img src={`${image2}`} className="followinguserimages" alt=''/>
            </div>
            <div style={{display:'flex' , alignItems:'center',marginTop:-10}}>
                <img src={`${image4}`} className='notificationimg' alt='' />
                <p style={{marginLeft:'5px' ,color:'#aaa' , fontSize:13,textAlign:'start', width:'120px' }}>Pinku like your post</p>
                <img src={`${image3}`} className="likeimage" alt=''/>
            </div>
            <div style={{display:'flex' , alignItems:'center' , marginTop:-10}}>
                <img src={`${image6}`} className='notificationimg' alt='' />
                <p style={{marginLeft:'5px' ,color:'#aaa' ,fontSize:13,textAlign:'start', width:'120px' }}>Sipu..67 started following you</p>
                <img src={`${image4}`} className="followinguserimages" alt=''/>
            </div>
            <div style={{display:'flex' , alignItems:'center' ,marginTop:-10}}>
                <img src={`${image1}`} className='notificationimg' alt='' />
                <p style={{marginLeft:'5px' ,color:'#aaa' , fontSize:13,textAlign:'start', width:'120px' }}>@Notanki started following you</p>
                <img src={`${image5}`} className="followinguserimages" alt=''/>
            </div>
            <div style={{display:'flex' , alignItems:'center', marginTop:-10}}>
                <img src={`${image3}`} className='notificationimg' alt='' />
                <p style={{marginLeft:'5px' ,color:'#aaa' , fontSize:13,textAlign:'start', width:'120px' }}>#**pampdi **# like your post</p>
                <img src={`${image6}`} className="likeimage" alt=''/>
            </div>
        </div>
        <div className='NotificationContainer'> 
            <div style={{display:'flex' , justifyContent:'space-around'}}>
            <p style={{marginLeft:"-20px"}}>Explore</p>
            <p style={{color:'#aaa', marginleft:'40px'}}>See All</p>
            </div>
            <div>
                <img src={`${image1}`} className="exploreimage" alt="" />
                <img src={`${image2}`} className="exploreimage" alt="" />
                <img src={`${image3}`} className="exploreimage" alt="" />
                <img src={`${image4}`} className="exploreimage" alt="" />
                <img src={`${image5}`} className="exploreimage" alt="" />
                <img src={`${image6}`} className="exploreimage" alt="" />
                <img src={`${image}`} className="exploreimage" alt="" />
               
            </div>
            </div>

    </div>
  )
}
