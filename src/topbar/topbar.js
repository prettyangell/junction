
import "./topbar.css"
function Listcomponent({items}){
    const Listitems=items.map((item,index)=>(
        <li key={index}>{item}</li>
    ))

    return(
        <ul className="info">
            {Listitems}
        </ul>
    )
}


export default function TopBar({list,link}){
    // const mylist=['About','Projects','Contact'];

    return <>
        <div className="navbar">

            <div className="logo-container">
                <img src={link} className="logo"></img>
            </div>
            <div className="other">
                <Listcomponent items={list}/>
                
            </div>
        </div>
        
    </>
}

