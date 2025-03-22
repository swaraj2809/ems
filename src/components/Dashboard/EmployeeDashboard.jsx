import React from 'react'
import Header from '../others/Header'
import TaskListCount from '../others/TaskListCount'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = ({data}) => {
  // console.log(data);
  
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header data={data} />
      <TaskListCount data={data} />
      <Tasklist data={data} />
    </div>
  );
}

export default EmployeeDashboard
