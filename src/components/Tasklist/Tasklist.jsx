import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
    // console.log(data);
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 w-full py-5  mt-10 flex-nowrap'>
       {data.tasks.map(((elem , idx)=>{
            if(elem.active) return <AcceptTask key = {idx}/> 
            if(elem.completed) return <CompleteTask key={idx} />; 
            if(elem.failed) return <FailedTask key={idx} />; 
            if(elem.newTask) return <NewTask key={idx} />; 

       }))}

    </div>
  )
}

export default Tasklist
