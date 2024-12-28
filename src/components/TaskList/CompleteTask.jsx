import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 p-5 h-full w-[300px] bg-blue-500 rounded-xl'>

    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded'> {data.title} </h3>
        <h4 className=' text-sm'>{data.date}</h4>
    </div>

    <h2 className='mt-5 text-2xl font-semibold'>{data.category}</h2> <br />
    <p className='text-sm '>{data.description}</p>

<div className='mt-2'>
<button className='w-full py-1 px-2 text-sm bg-green-600'>Completed</button>
</div>
</div>
  )
}

export default CompleteTask
