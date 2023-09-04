import React from 'react'

const Employee = ({ employee, deleteEmployee }) => {
  return ( 
  
  <tr key={employee.id}>
    <td className='text-left px-6 py-4 whitespace-nowrap'> <div className="text-sm text-gray-500">{employee.firstName}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'> <div className="text-sm text-gray-500">{employee.lastName}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'> <div className="text-sm text-gray-500">{employee.emailId}</div></td>
    <td className='text-right px-6 py-4 whitespace-nowrap'>
       
        <a onClick={(e,id) => deleteEmployee(e, employee.id)} 
        className='text-red-900 hover:text-black px-4 hover:cursor-pointer'>Delete</a>
       </td>
       </tr>
    
  )
}

export default Employee