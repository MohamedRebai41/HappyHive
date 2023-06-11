import events from "../data/EventData";
import Event from "../components/Event";

export default function Events() {
    return(
        <div>
            <div className="flex flex-col items-center justify-between bg-tertiary">
                    <div className="h-1/5 text-primary font-black text-4xl m-5 mb-10">
                        Upcoming Events
                    </div>
                    <div >
                        {/* className="bg-white flex flex-col items-center text-primary w-[90%] rounded-md p-5 mt-5" */}
                    {
                        events.map((event) => {
                            return (
                                <Event key={event.id} event={event}></Event>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

