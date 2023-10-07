import image from '../assets/image 5.png';
import link from "../assets/blanc_logo_keybox.svg";

import './signup.css';
import TopBar from '../topbar/topbar';


function Inputext({text,placeholder}){
    return (
      <div className='field-label'>
        <label for={text}>{text}</label>
        <input type="text" id={text} name={text} placeholder={placeholder} required/>
  
      </div>
    );
  }
export default function Signup(){
    const mylist=[''];



    return(
        <>
            <TopBar list={mylist} link={link}/>

        <div className='signup-container'>

        <div className='signup-left'>
          <img className="avatar-signup" src={image}></img>
          <a href=''>Already a member! Sign in</a>
          <p></p>
  
        </div>
        <div className='signup-right'>
            <Inputext text="First Name" placeholder=""></Inputext>
            <Inputext text="Last name" placeholder=""></Inputext>
            <Inputext text="Pone number" placeholder=""></Inputext>
            <Inputext text="Email adress" placeholder=""></Inputext>


            {/* <div className='checkbox-container'>
              <label class="round-check">
              <input type="checkbox" class="check-input"/>
              <span class="checkmark"></span>
              J'accepte les conditions et la politique de confidentialité
              </label>
            </div> */}
            <div className='signup-button-conatiner'>
              <button className='signup-button'>Sign up</button>
  
            </div>
        </div>
  
      </div>
      </>
    );
}