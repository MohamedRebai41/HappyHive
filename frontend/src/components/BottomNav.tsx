import {IoHome} from 'react-icons/io5';
import {FaStore} from 'react-icons/fa';
import {IoCalendarOutline} from 'react-icons/io5';
import {AiTwotoneHeart} from 'react-icons/ai';
import {IoIosChatbubbles} from 'react-icons/io';
import { Link } from "react-router-dom";

export default function BottomNav() {
    return(
        <>
            <div className="bg-primary py-2 w-full flex flex-row justify-between px-4 fixed bottom-0 z-10">
                <Link to="/events">
                    <div className="w-fit">
                    <IoCalendarOutline className="text-white text-3xl inline-block"/>
                </div>
                </Link>
                <Link to="/store">
                    <div className="w-fit">
                    <FaStore className="text-white text-3xl inline-block"/>
                </div>
                </Link>
                <Link to="/">
                    <div className="w-fit">
                    <IoHome className="text-secondary text-3xl inline-block"/>
                </div>
                </Link>
                <div className='w-fit'>
                    <AiTwotoneHeart className="text-white text-3xl inline-block"/>
                </div>
                <div className='w-fit'>
                    <IoIosChatbubbles className="text-white text-3xl inline-block"/>
                </div>
            </div>
        </>
    );
}