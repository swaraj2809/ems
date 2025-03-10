import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utilities/localStorage'
import { getLocalStorage } from './utilities/localStorage'
import { employees, admin } from './utilities/localStorage'
import {useState} from 'react'
import { AuthContext } from './context/AuthProvider'
import Header from './components/others/Header'


const App = () => {

      const [user, setUser] = useState(null)
      const [loggedInUserData, setLoggedInUserData] = useState();
      
      const authData = useContext(AuthContext);

// useEffect(() => {
//   if(authData){
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//     }
//   }
// }, [authData]);
useEffect(() => {
  const data = getLocalStorage();
  if(data) setLoggedInUserData(data);
  return () => {
    
  };
}, []);

console.log(loggedInUserData);

const handleLogin = (email,password) => {
  if(email == 'admin@me.com' && password== '123'){
    setUser('admin')
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
  }else if (authData) {
    const employee = authData.employees.find((e) => email == e.email && password == e.password);
    if(employee){
setUser("employee");
setLoggedInUserData(employee);
localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
    }
    

  } else {
    alert("incorrect id or password");
  }
}
// const handleLogout = () => {
//   setUser(null);
//   localStorage.removeItem("loggedInUser");

// }

// console.log(data)
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : (
        ""
      )}
    </>
  );
}

export default App
