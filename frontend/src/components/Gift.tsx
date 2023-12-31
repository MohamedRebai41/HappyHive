import {BsGift} from 'react-icons/bs'
import employees from '../data/EmployeeData';

function Gift(){
    return(
        <div className='w-screen h-screen fixed top-0 left-0 backdrop-blur-sm'>
            <div className="text-center max-w-screen-md w-[90%] m-auto p-5 rounded-md bg-gray-100 bg-opacity-90 relative top-1/3 left-[2%] bg-primary" style={{ width: 'fit-content' }}>
            <form>
                <div className="m-4">
                    <label className="text-3xl text-secondary">Choose Employee</label>
                </div>
                <div >
                    <select className="mb-4 w-[95%] h-12 rounded-md bg-white">
                        <option></option>
                        {employees.map((employee) => (
                            <option className='' key={employee.id} value={employee.id}>{employee.fullName}</option>
                        ))}
                    </select>
                </div>
                <div className=" m-2">
                    <input className="w-full h-12 px-2.5 rounded-md border-solid border-2" type="text" placeholder="Enter a message"/>
                </div>
                <div className="m-4">
                    <button className="h-12 text-white bg-secondary rounded-full w-12" type='submit'>
                        <BsGift className="inline-block mb-1 text-primary"/>
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Gift;