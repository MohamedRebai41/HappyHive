import {BsGift} from 'react-icons/bs'

function Gift(){
    return(
        <div className="text-center max-w-screen-md w-[90%] m-auto p-5 rounded-md bg-gray-100 bg-opacity-90" style={{ width: 'fit-content' }}>
            <form>
                <div className="m-4">
                    <label className="text-">Choose Employee</label>
                </div>
                <div className="m-4">
                    <select>
                    </select>
                </div>
                <div className="flex m-2">
                    <input className="w-full h-12 px-2.5 rounded-md border-solid border-2" type="text" placeholder="Enter a message"/>
                </div>
                <div className="m-4">
                    <button className="h-12 text-white bg-secondary rounded-full w-12" type='submit'>
                        <BsGift className="inline-block mb-1 text-primary"/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Gift;