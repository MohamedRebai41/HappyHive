import {BsThreeDots} from 'react-icons/bs'
import {BsQrCode,BsGift} from 'react-icons/bs'
import {BiMessageRounded} from 'react-icons/bi'
import {useState} from 'react'


export default function ToolBox() {
    const [show,setShow] = useState("");
    const [show2,setShow2] = useState("");
    const [show3,setShow3] = useState("");
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

    return (
        <>
        <div className='w-fit fixed bottom-16 right-3 z-10'>
        <div className="w-40 h-40 relative">
            <div className={"w-12 h-12 bg-primary flex flex-col justify-center items-center text-center rounded-full absolute right-0 bottom-0 ease-in-out duration-150" + show}>
                <BsQrCode className="text-3xl text-secondary"/>
            </div>
            <div className={"w-12 h-12 bg-primary flex flex-col justify-center items-center text-center rounded-full absolute right-0 bottom-0 ease-in-out duration-150" + show2}>
                <BsGift className="text-3xl text-secondary"/>
            </div>
            <div className={"w-12 h-12 bg-primary flex flex-col justify-center items-center text-center rounded-full absolute bottom-0 right-0 ease-in-out duration-150" + show3}>
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
        </>
    );
    
}