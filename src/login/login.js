
import React, { useState } from 'react';
import link from "../assets/blanc_logo_keybox.svg";
import './login.css';
import TopBar from '../topbar/topbar';
import { Link } from 'react-router-dom';
import image from '../assets/image3.png';


export function Inputext({text,placeholder}){
  return (
    <div className='field-label'>
      <label for={text}>{text}</label>
      <input type="text" id={text} name={text} placeholder={placeholder} required/>

    </div>
  );
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const mylist=[''];

  return (
    <>
            <TopBar list={mylist} link={link}/>
    <div className='login-container'>
      <div className='login-left'>
          <Inputext text="User Name" placeholder=""></Inputext>
          <Inputext text="Password" placeholder=""></Inputext>
          <div className='checkbox-container'>
            <label class="round-check">
            <input type="checkbox" class="check-input"/>
            <span class="checkmark"></span>
            J'accepte les conditions et la politique de confidentialité
            </label>
          </div>
          <div className='login-button-conatiner'>
            <button className='login-button'>Sign in</button>

          </div>
      </div>
      <div className='login-right'>
        <img className="avatar-login" src={image}></img>
        <a href=''>Not a member yet? Sign up</a>
        <p></p>

      </div>

    </div>
    </>
    // <div className="login-container">
    //     <TopBar></TopBar>
    //   <form onSubmit={handleSubmit} className="login-form">
    //     <h2>Login</h2>
    //     <div className="form-group">
    //       <label htmlFor="username">Username:</label>
    //       <input
    //         type="text"
    //         id="username"
    //         name="username"
    //         value={username}
    //         onChange={handleUsernameChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         value={password}
    //         onChange={handlePasswordChange}
    //         required
    //       />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
}

export default Login;
