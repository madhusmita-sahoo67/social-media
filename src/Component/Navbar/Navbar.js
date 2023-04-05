import React from 'react'
import"./navbar.css"
import searchIcon from "../Images/search.png"
import Notifications from "../Images/bell.png"
import Message from "../Images/message.png"
import Profileimage from "../Images/Profile.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='mainNavbar'>
        <div className="LogoContainer">
            <p>Social</p>
        </div>
        <div>
            <div className="searchInputContainer">
                <img src={`${searchIcon}`} className="searchIcons" alt="" ></img>
                <input type="text" className='searchInput' placeholder='search your friends' name="" id="" />
            </div>
        </div>
        <div className="IconContainer">
                <img src={`${Notifications}`} className="Icons" alt="" />
                <img src={`${Message}`} className="Icons" alt="" />
                <Link to="/profile/354687562g373">
                <div style={{display:'flex' , alignItems:'center'}}>
                <img src={`${Profileimage}`} className="ProfileImage" alt="" />
                <p style={{marginRight:'5px'}}>Pinku</p>
                </div>
                </Link>
        </div>
    </div>
  )
}
