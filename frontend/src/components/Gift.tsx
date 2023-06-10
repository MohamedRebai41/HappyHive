function Gift(){
    return(
        <div className="bg-red flex h-full text-center max-w-screen-md w-full m-auto p-5 mb-[50%]">
            <form className=''>
                <div className="m-2">
                    <label className="text-red">Choose Employee</label>
                    <select>
                    </select>
                </div>
                <div className="flex m-2">
                    <input className="w-full h-12 px-2.5 rounded-md border-solid border-2 lg:w-[400px]"type="text" placeholder="Enter a message"/>
                </div>
            </form>
        </div>
    )
}

export default Gift;