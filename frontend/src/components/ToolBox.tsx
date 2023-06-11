import {BsThreeDots} from 'react-icons/bs'
import {BsQrCode,BsGift} from 'react-icons/bs'
import {BiMessageRounded} from 'react-icons/bi'
import {useState} from 'react'
import Gift from './Gift'
import { Link } from 'react-router-dom'


export default function ToolBox() {
    const [show,setShow] = useState("");
    const [show2,setShow2] = useState("");
    const [show3,setShow3] = useState("");
    const [popup,setPopup] = useState(false);
    const showMenu = () => {
        if(show === ""){
            setShow(" -translate-y-20");
            setShow2(" -translate-y-12 -translate-x-12");
            setShow3(" -translate-x-20");
        }else{
            setShow("");
            setShow2("");
            setShow3("");
        }
    }
    const showGift = () => {
        console.log("show gift");
        popup ? setPopup(false) : setPopup(true);
        showMenu();
    }

    return (
        <>
        <div className='w-fit fixed bottom-16 right-3 z-10'>
        <div className="w-40 h-40 relative">
            <Link to="/qrscanner">
            <div className={"w-12 h-12 bg-primary flex flex-col justify-center items-center text-center rounded-full absolute right-0 bottom-0 ease-in-out duration-150" + show}
            onClick={showMenu}
            >
                <BsQrCode className="text-3xl text-secondary"/>
            </div>
            </Link>
            <div className={"w-12 h-12 bg-primary flex flex-col justify-center items-center text-center rounded-full absolute right-0 bottom-0 ease-in-out duration-150" + show2}
            onClick={showGift}
            >
                <BsGift className="text-3xl text-secondary"/>
            </div>
            <div className={"w-12 h-12 bg-primary flex flex-col justify-center items-center text-center rounded-full absolute bottom-0 right-0 ease-in-out duration-150" + show3}
            onClick={showMenu}
            >
                <BiMessageRounded className="text-3xl text-secondary"/>
            </div>
            <div 
            className="w-12 h-12 bg-primary flex flex-col justify-center items-center text-center rounded-full absolute bottom-0 right-0 curser-pointer"
            onClick={showMenu}
            >
                <BsThreeDots className="text-3xl text-secondary"/>
            </div>
        </div>
        </div>
        {popup && <Gift/>}
        </>
    );
    
}