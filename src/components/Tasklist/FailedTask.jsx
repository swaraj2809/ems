import React from 'react'

const FailedTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-emerald-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="text-sm bg-red-600 px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">20 Feb 2025</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">make a youtube virdo</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur
        vel tempore consectetur aspernatur. Maxime.
      </p>
      <div className='mt-2'>
        <button className='w-full bg-red-500'>failed</button>
      </div>
    </div>
  );
}

export default FailedTask
