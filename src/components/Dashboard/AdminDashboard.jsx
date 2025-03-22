import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/Createtask';
import Alltask from '../others/Alltask';

const AdminDashboard = ({data}) => {

  return (

    <div className="h-screen w-full p-10">
      <Header data={data}/>
      <Createtask />
      <Alltask />
    </div>
  );
}

export default AdminDashboard
