import React from 'react'

const Createtask = () => {
  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-7">
        <form className="flex flex-wrap items-start justify-between w-full ">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text "
                placeholder="Enter Task Information"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
                placeholder="Enter Date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task assigned to</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text "
                placeholder="Enter Employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category of task</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text "
                placeholder="Enter Domain of task"
              />
            </div>
          </div>

          <div className="w-2/5" flex flex-col items-start>
            <h3>Description</h3>
            <textarea
              className="w-full h-44 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-800 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createtask
