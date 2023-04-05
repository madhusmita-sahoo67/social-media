import React from 'react'
import "./home.css"
import Navbar from "../../Component/Navbar/Navbar"
import Leftside from '../../Component/LeftsideContainer/leftside'
import Rightside from '../../Component/RightsideContainer/Rightside'
import Mainpost from '../../Component/MainPostContainer/mainpost'

export default function Home() {
  return (
    <div className='home'>
        <Navbar />
          <div className='ComponentContainer'>
            <Leftside />
            <Mainpost />
            <Rightside />

          </div>

    </div>
  )
}
