import React, { useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'

const Createtask = () => {

    const [userData, setUserData] = useContext(AuthContext)


    const [Title, setTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskdate, settaskdate] = useState('')
    const [asignto, setasignto] = useState('')
    const [category, setcategory] = useState('')



    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ Title, taskDescription, taskdate, category, asignto, active: false, NewTask: true, failed: false, completed: false })


        const data = userData




        data.forEach(function (elem) {
            if (asignto == elem.firstname) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1



            }
        })

        setUserData(data)


        /// localStorage.setItem('employees',JSON.stringify(data))

        setTitle('')
        setasignto('')
        setcategory('')
        settaskDescription('')
        settaskdate('')

    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full  items-start justify-between'>

                <div className='w-1/2'>


                    <div ><h3 className='text-sm text-gray-300 mb-0.5'>Task Title </h3>
                        <input


                            value={Title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}


                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Input title' /></div>


                    <div><h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskdate}
                            onChange={(e) => {
                                settaskdate(e.target.value)
                            }}

                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" /></div>


                    <div><h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                            value={asignto}
                            onChange={(e) => {
                                setasignto(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' /></div>

                    <div> <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setcategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design , Dev , etc' /></div>

                </div>



                <div className='w-1/2 flex flex-col items-start'><h3 className='text-sm text-gray-300 mb-0.5'>Desription</h3>

                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            settaskDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30 " rows="10"></textarea></div>



                <button className=' bg-emerald-500 py-3 hover:bg-emerald-600  px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </form>
        </div>
    )
}

export default Createtask
