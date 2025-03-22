import React from 'react'

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-violet-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="text-sm bg-red-600 px-3 py-1 rounded">category</h3>
        <h4 className="text-sm">20 Feb 2025</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">make a youtube virdo</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur
        vel tempore consectetur aspernatur. Maxime.
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 p-1 text-sm">mark as completed</button>
        <button className="bg-red-500 p-1 text-sm">mark as failedd</button>
      </div>
    </div>
  );
}

export default AcceptTask
