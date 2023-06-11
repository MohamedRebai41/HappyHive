import EventType from "../types/EventType";
import { BsCheckLg } from "react-icons/bs";
import {RxCross2 } from "react-icons/rx";

const Event: React.FC<{ event: Partial<EventType> }> = ({
    event
    }) => {
        return (
            <div className='w-5/6 max-w-3xl m-auto'>
                <div className='mb-3 w-full gap-5 bg-white items-center text-primary w-[90%] rounded-md p-5  '>
                    <h1 className='font-black m-1'> {event.name} </h1>
                    <h2 className='self-center m-1'>{event.description}</h2>
                    <div>
                        <span className='self-center m-1'>{event.date}</span>
                    </div>
                    <div className='flex'>
                        <BsCheckLg className='self-center m-1 ml-auto cursor-pointer text-2xl text-secondary' />
                        <RxCross2 className='self-center m-1 cursor-pointer text-2xl' />
                    </div>
                </div>
            </div>
        );
    }
    
    export default Event;