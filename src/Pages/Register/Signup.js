import React from 'react'
import { Link } from 'react-router-dom';
import './signup.css';

export default function Signup() {
  return (
    <div className='mainContainersignup'>
        <div className='submainContainer'>
            <div style={{flex:1, marginLeft:140, marginBottom:'100px'}}>
                <p className='logoText'>Soc<span className='part'>ial</span></p>
                <p className='infoText'>Connect With Your <span className='part'>Friend and Family</span></p>
            </div>
            <div style={{flex:3}}>
                <p className='createAccountText'>Create New Account</p>
                <input type="text" placeholder='Username' className='inputText'/>
                <input type="test" placeholder='Phonenumber' className='inputText'/>
                <input type="email" name='' id='' placeholder='email' className='inputText'/>
                <input type="password" placeholder='********' name='' id='' className='inputText'/>
                <button className='btnsignup'>Signup</button>
                <Link to="/">
                <p style={{textAlign:'start', marginLeft:'30.6%'}}>Allready you have an account</p>
                </Link>
            </div>
        </div>
    </div>
  )
}
