import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const Tasklist = ({ data }) => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center flex-nowrap justify-start gap-10 w-full py-5 mt-20'>

{data.tasks.map((elem , idx)=> {

    if(elem.active){
        return <AcceptTask  key ={idx} data={elem} />
    }
    if(elem.NewTask){
        return <NewTask  key ={idx} data={elem}/>
    }
    if(elem.Completed){
        return <CompleteTask  key ={idx} data={elem}/>
    }
    if(elem.failed){
        return <FailedTask  key ={idx} data={elem}/>
    }
}
)}



        </div>
    )
}

export default Tasklist
