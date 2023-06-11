// import React, { useEffect, useState } from 'react';
// import useLeaderboard from '../hooks/useLeaderboard';
import {employees} from '../data/EmployeeData';
import Employee from '../components/Employee';

export default function Leaderboard() {
  return (
    // <div className='flex min-h-screen h-fit w-screen bg-primary flex-col '>
      <div className='flex flex-none min-h-screen flex-col items-center justify-between bg-tertiary'>
      
      <div className='bg-white flex flex-col items-center text-primary w-[90%] rounded-md p-5 mt-5'>
        <div className='h-1/5 text-primary font-black text-4xl m-5 mb-10'>
          Leaderboard
        </div>
        {
          employees.map((employee, index) => {
            return (
              <Employee key={index} index={index+1} employee={employee}></Employee>
            );
          })
       
         } 
      </div>
    </div>
  );
}

