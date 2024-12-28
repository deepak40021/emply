import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () => {

const [userData,setUserData] = useContext(AuthContext)


  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60 ' >
      <div className='bg- bg-black mb-3  py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 bg-red-600'>Employee Name</h2>
        <h3 className='w-1/5 bg-red-600'>New Task</h3>
        <h5 className='w-1/5 bg-red-600'>Active Task</h5>
        <h5 className='w-1/5 bg-red-600'>Completed</h5>
        <h5 className='w-1/5 bg-red-600'>Failed Task</h5>
      </div>
      <div className=' h-[80%] overflow-auto'>
      {userData.map((elem ,idx)=>{
        return <div key={idx} className='bg- bg-black mb-3  border-2 border-emerald-400 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 text-lg font-medium '>{elem.firstname}</h2>
        <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskCounts.newtask}</h3>
        <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCounts.active}</h5>
        <h5 className='w-1/5 text-lg font-medium text-green-600'>{elem.taskCounts.completed}</h5>
        <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCounts.failed}</h5>
      </div>
      })}
      </div>
    
  </div>
  ) 
}

export default Alltask
