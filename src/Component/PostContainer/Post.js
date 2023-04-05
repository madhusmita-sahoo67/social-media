import React, { useState } from 'react'
import "./Post.css";
import ProfileImage from '../Images/Profile.png';
import LikeIcon from '../Images/like.png';
import CommentIcon from '../Images/speech-bubble.png';
import ShareIcon from '../Images/share.png';
import Moreoption from '../Images/more.png';
import anotherlikeicon from '../Images/setLike.png';

export default function Post() {
    const [Like, setLike] = useState(LikeIcon);
    const [count, setCount] = useState(100);
    const [Comments, setComments] = useState([]);
    const [commentwritting, setcommentwritting] = useState('');
    const [show , setshow] = useState(false);

    const handleLike = () => {
        if (Like === LikeIcon) {
            setLike(anotherlikeicon);
            setCount(count + 1);
        } else {
            setLike(LikeIcon)
            setCount(count - 1);
        }
    }

    const addcommentbtn = () => {
        const comment = {
            "id": "123456#7890",
            "username": "Pinku",
            "title": `${commentwritting}`
        }
        setComments(Comments.concat(comment));
    }

    const handleComment = () => {
        addcommentbtn();
    }

    console.log(Comments)

    const handleshow = () => {
        if(show === false){
            setshow(true)
        }else{
            setshow(false)
        }
    }






    return (
        <div className='PostContainer'>
            <div className='SubPostContainer'>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`${ProfileImage}`} className="PostImage" alt="" />
                        <div>
                            <p style={{ marginLeft: '5px', textAlign: 'start' }}>Pinku</p>
                            <p style={{ fontSize: '11px', textAlign: 'start', marginLeft: 5, marginTop: -13, color: '#aaa' }}>Following by Pinku</p>
                        </div>
                        <img src={`${Moreoption}`} className="moreicons" alt="" />
                    </div>
                    <p style={{ textAlign: 'start', width: '96%', marginLeft: 20, marginTop: 0 }}>Lorem ipsum dolor sit amet consectetur adipiscing elit, Dolar,ab, accusantium.Veniam evenit magni.....</p>
                    <img src={`${ProfileImage}`} className="PostImages" alt="" />
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', marginLeft: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <img src={`${Like}`} className="iconsforpost" onClick={handleLike} alt="" />
                                <p style={{ marginLeft: '6px' }}>{count} Likes</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 20, cursor: 'pointer' }} >
                                <img src={`${CommentIcon}`} className="iconsforpost" onClick={handleshow} alt="" />
                                <p style={{ marginLeft: '6px' }}>100K Comments</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 170, cursor: 'pointer' }} >
                                <img src={`${ShareIcon}`} className="iconsforpost" alt="" />
                                <p style={{ marginLeft: '6px' }}>share</p>
                            </div>
                        </div>
                    </div>
                    {show === true ? 
                     <div style={{padding:'10px'}}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                         <img src={`${ProfileImage}`} className="PostImage" alt="" />
                         {/*<p style={{marginLeft:'6px'}}>Pinku</p>*/}
                         <input type="text" className="commentinput" placeholder='Write the Comment' onChange={(e) => setcommentwritting(e.target.value)} />
                         <button className='addcommentbtn' onClick={handleComment}>Post</button>
                     </div>
                     {Comments.map((item) => (
                     <div style={{alignItems: 'center' }}>
                        <div style={{display:'flex', alignItems:'center'}}> 
                         <img src={`${ProfileImage}`} className="PostImage" alt="" />
                         <p style={{marginLeft:'6px', fontSize:18, marginTop:6}}>{item.username}</p>
                         </div>
                         <p style={{ marginLeft: "55px" , textAlign:'start' , marginTop:-16 }}>{item.title}</p>
                         <p style={{ marginLeft: "55px" , textAlign:'start' , marginTop:-10 , color:"#aaa" , fontSize:11}}>Reply</p>
                     </div>
                     ))}
                     </div>:''
                    }
                   
                    
                </div>
            </div>
        </div>
    )
}
