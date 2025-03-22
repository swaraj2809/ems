import React from 'react'

const TaskListCount = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] px-9 py-6 bg-yellow-500 ">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium">Active task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-blue-700 ">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium">New task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-green-700 ">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium">Completed task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-red-800 ">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium">Failed task</h3>
      </div>
    </div>
  );
}

export default TaskListCount
