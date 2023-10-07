import TopBar from "../topbar/topbar";
import link from "../assets/blanc_logo_keybox.svg"

export default function Todo(){
    const mylist=['Home','ToDo','Resources','Activities'];

    return(<>
    <TopBar list={mylist}/>
    
    </>);
}