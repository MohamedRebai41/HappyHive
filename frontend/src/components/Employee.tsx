import EmployeeType  from "../types/EmployeeType"

// import { apiBaseUrl } from '../config';
// import shoudDisplayDefaultImage from '../utils/shouldDisplayDefaultImage';

const Employee: React.FC<{ index: number; employee: Partial<EmployeeType> }> = ({
  index,
  employee
}) => {
  return (
    <div className='w-5/6 max-w-3xl'>
      <div className='mb-3  flex w-full flex-row  gap-5 '>
        <p className='font-black self-center'> {index} </p>
        <img
          src='./images/employee.png' 
          className='h-16 w-16 rounded-full border-2 border-black bg-white'
        ></img>
        <span className='self-center font-black'>{employee.fullName}</span>
        <span className='self-center flex-grow text-right'>{employee.score}</span>
      </div>
      <hr className='border-t w-full border-black mb-4' />
    </div>
  );
};

export default Employee;
