import EventType from "../types/EventType";

const Event: React.FC<{ event: Partial<EventType> }> = ({
    event
    }) => {
        return (
            <div className='w-5/6 max-w-3xl'>
                <div className='mb-3 w-full gap-5 bg-white flex flex-col items-center text-primary w-[90%] rounded-md p-5 mt-5'>
                    <h1 className='font-black'> {event.name} </h1>
                    <h2 className=''>{event.description}</h2>
                    <div>
                        <span className='self-center'>{event.date}</span>
                    </div>
                </div>
            </div>
        );
    }
    
    export default Event;