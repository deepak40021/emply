import React from 'react'

const TasklistNumbers = ({data}) => {
    return (
        <div className='flex mt-10  justify-between gap-6'>

            <div className=' rounded-xl py-6 px-6 w-[40%] bg-blue-400'>

                <h2 className='text-3xl font-semibold'>{data.taskCounts.newtask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>



            </div>


            <div className=' rounded-xl py-6 px-8 w-[40%] bg-green-400'>

                <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl font-medium'>Complete Task</h3>



            </div>

            <div className=' rounded-xl py-6 px-8 w-[40%] bg-red-400'>

            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>



        </div>
        <div className=' rounded-xl py-6 px-8 w-[40%] bg-yellow-500'>

            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Active</h3>



        </div>

        </div>
    )
}

export default TasklistNumbers
