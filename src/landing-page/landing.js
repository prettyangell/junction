
import logo from '../assets/bleu_logo_keybox 1.svg';
import './landing.css';
import robot from '../assets/robot-with-document-folders-removebg 1.png';
import test1 from '../assets/AdobeStock_388554085_Preview 1.png';
import test2 from '../assets/AdobeStock_618521142_Preview 1.png';
import test3 from '../assets/AdobeStock_614759545_Preview 1.png';
import test4 from '../assets/AdobeStock_618521142_Preview 2 (1).png';
import inst1 from '../assets/AdobeStock_622273389_Preview 1.png';
import inst2 from '../assets/AdobeStock_635499722_Preview 1.png';
import inst3 from '../assets/AdobeStock_630709424_Preview 1.png';
import inst4 from '../assets/AdobeStock_630709424_Preview 1 (1).png';
import inst5 from '../assets/AdobeStock_626683574_Preview 1.png';
import star from '../assets/Star 8.png';
import map from '../assets/map (1).svg';
import maps from '../assets/51 - place.svg';
import email from '../assets/Email.svg';
import tel from '../assets/Vector.svg';
import fb from '../assets/facebook-outline 1.svg';
import insta from '../assets/Vector (1).svg';

function IconGenerator({ count }) {
    const icons = [];
    
  
    // Use a loop to generate the icons
    for (let i = 0; i < count; i++) {
      icons.push(<img key={i} src={star}></img>);
    }
  
    return <div className="icon-container">{icons}</div>;
}
  

function Course({img,title,prof,int,price,tickets}){
    const min = 1; // Minimum value (inclusive)
const max = 5; // Maximum value (inclusive)

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber)
    return(
    <div className='course'>
        <img src={img} style={{borderRadius : 20}}></img>
        <h3 style={{height:40}}>{title}</h3>
        <p style={{height:20}}>{prof}</p>
        <p style={{height:20,fontWeight:700}}>{price}</p>
        <IconGenerator count={randomNumber}/>
        <p className='ticket' style={{height:25}}>{tickets}</p>

    </div>
    );
}
function Instructor({img,name,desc}){
    return(
        <div className='instructor'>
            <img src={img}></img>
            <h1 style={{fontSize:25,margin:5}}>{name}</h1>
            <p style={{margin:0}}>{desc}</p>
        </div>
    )
}
const instructorsData=[
    {
        img:inst1,
        name:"Pr ZAKOUR",
        desc:"fullstack developpement",
    },
    {
        img:inst5,
        name:"Dr DJIROUN",
        desc:"Database",

    },
    {
        img:inst4,
        name:"Mme BELKHIR",
        desc:"cyber-security ",

    },
    {
        img:inst3,
        name:"Dr BOUHRAOUA",
        desc:"best brother",

    },
    {
        img:inst2,
        name:"Dr KESSIR",
        desc:"best at everything",

    },
]
const coursesData = [
    {
      img: test1,
      title: 'Discover creativity and innovation in Arduino course.',
      prof: 'Mr Salmi ',
      int: 'Intermediate',
      price: '1,5000 DA',
      tickets: "best seller",
    },
    {
      img: test2,
      title: 'STEM based robotics program for kids 8+',
      prof: 'Mr Amari ',
      int: 'Advanced',
      price: '2,0000 DA',
      tickets: "best seller",
    },
    {
        img: test3,
        title: 'Explore innovation and creativity in Programming and AI course.',
        prof: 'Mr Bouguerri ',
        int: 'Advanced',
        price: '1,8000 DA',
        tickets: "for adults",
      },
      {
        img: test4,
        title: 'Discover creativity and innovation in our Arduino course.',
        prof: 'Mr Salmi ',
        int: 'Advanced',
        price: '1,5000 DA',
        tickets: "for kids",
      },
    // Add more course objects as needed
  ];

  function Link({icon,text}){
    return (
        <div className='link-landing'>
            <img src={icon} ></img>
            <p>{text}</p>
        </div>
    )

  }
export default function Landing(){
    return(
        <div className="landing-page">
            <div className="navbar">
                <img src={logo} className="logo"></img>
                <ul className="info">
                    <li key="">Home</li>
                    <li key="">About</li>
                    <li key="">Locations</li>
                    <li key="">Contact Us</li>

                </ul>
                <button className="button">Get Started</button>
            </div>
            <div className="main-content">
                <div className="main-content-left">
                <h1 style={{fontSize : 54,margin:0}}>Make your key to The future !</h1>
                    <p style={{margin:0,fontSize:15,fontWeight:550}}>to make the future accessibleto all. We accomplish this by delivering cutting-edge software and hardware solutions, complemented by customized training programs suitable for individuals of all ages.</p>
                    <div className="button-container">
                        <button className="button">Get Started</button>
                        <button className="button-c">Contact Us</button>
                    </div>
                </div>
                <div className="main-content-right">
                <img src={robot} className="hero-robot"/>
                </div>
            </div>
            <h1 style={{fontSize : 40}}>Pick a course and get started</h1>
            <div className='course-container'>
            {coursesData.map((course, index) => (
          <Course
            key={index}
            img={course.img}
            title={course.title}
            prof={course.prof}
            int={course.int}
            price={course.price}
            tickets={course.tickets}
          />
        ))}
            </div>
            <h1 style={{fontSize : 40}}>Meet our instructors</h1>
        <div className='instructor-container'>
            {instructorsData.map((instructor, index) => (
          <Instructor
            key={index}
            img={instructor.img}
            name={instructor.name}
            desc={instructor.desc}
            />
            ))}
            </div>

            <img src={map} style={{width:"100%"}}></img>
            <div className='footer-landing'>
                <div className='footer-landing-left'>
                    <h1>Contact info</h1>
                    <Link icon={maps} text="Cité 20 Aout Oued Rommane, Alachour ALGER"/>
                    <Link icon={email} text="contact@techmology-dz.com"/>
                    <Link icon={tel} text="+(213)-541464290"/>

                </div>
                <div className='footer-landing-right'>
                    <h1>Get social</h1>
                    <Link icon={fb} text="Keybox"/>
                    <Link icon={insta} text="key_box_dz"/>
                </div>
            </div>
        </div>

    );
}