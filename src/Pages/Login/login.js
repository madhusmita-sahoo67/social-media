import React from 'react'
import { Link } from 'react-router-dom';
import './login.css';

export default function login() {
  return (
    <div className='mainContainersignup'>
        <div className='submainContainer'>
            <div style={{flex:1, marginLeft:140, marginBottom:'100px'}}>
                <p className='logoText'>Soc<span className='part'>ial</span></p>
                <p className='infoText'>Connect With Your <span className='part'>Friend and Family</span></p>
            </div>
            <div style={{flex:3}}>
                <p className='createAccountText'>Login Account</p>
                <input type="email" name='' id='' placeholder='E-mail' className='inputText'/>
                <input type="password" placeholder='********' name='' id='' className='inputText'/>
                <button className='btnsignup'>Login</button>
                <Link to="/">
                <p style={{textAlign:'start', marginLeft:'30.6%'}}>Forgot Password</p>
                </Link>
                <Link to="/">
                <p style={{textAlign:'start', marginLeft:'30.6%'}}>Create a new account</p>
                </Link>
            </div>
        </div>
    </div>
  )
}
