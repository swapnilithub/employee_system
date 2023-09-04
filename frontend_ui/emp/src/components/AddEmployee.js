import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

   const [employee, setemployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
   });

   const navigate= useNavigate();

  const handlechange = (e) => {
    const value = e.target.value;
    setemployee({...employee, [e.target.name]: value});
  };
  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee).then((Response) => {
        console.log(Response);
        navigate("/employeeList");

    }).catch((error) => {
        console.log(error);
    });
  };

const reset = (e) => {
  e.preventDefault();
setemployee({
  id: "",
  firstName: "",
  lastName: "",
  emailId: "",
});
}

  return ( 
 <div className='flex max-w-2xl shadow bottom-b mx-auto bg-lime-100'>
    <div className='px-8 py-8 bg-Indigo-900'>
        <div className='text-cyan-900 text-4xl tracking-wider font-bold my-4'>
            <h1>
                Add New Employee
            </h1>
        </div>
        <div className='item-center justify-center h-14 w-full my-4'>
            <label className='block text-slate-600 text-sm font-bold'>First Name</label>
          <input
           type='text'
           name='firstName'
           value={employee.firstName}
           onChange={(e) => handlechange(e)}
           className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className='item-center justify-center h-14 w-full my-4'>
            <label className='block text--950 text-sm font-bold'>Last Name</label>
          <input
           type='text'
           name='lastName'
           value={employee.lastName}
           onChange={(e) => handlechange(e)}
           className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className='item-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-bold'>E-mail</label>
          <input
           type='email'
           name='emailId'
           value={employee.emailId}
           onChange={(e) => handlechange(e)}
           className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        
        <div className='item-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
        <button onClick={saveEmployee}
          className='rounded text-white font-semibold bg-cyan-500 hover:bg-cyan-600 py-2 px-6'>Save</button>
        <button onClick={reset}
        className='rounded text-white font-semibold bg-cyan-500 hover:bg--600 py-2 px-6'> Clear </button>
        </div>
    </div>
 </div>

  )
}

export default AddEmployee