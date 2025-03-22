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

  const authData = useContext(AuthContext);
      const [user, setUser] = useState("")
      const [loggedInUserData, setLoggedInUserData] = useState(null);
      const [, set] = useState();
      
      // useEffect(() => {
      //   const loggedInUser = localStorage.getItem('loggedInUser')
      //   if(loggedInUser){
      //     console.log(loggedInUser);
      //   } 
      // }, []);
     
      
const handleLogin = (email,password) => {
  if(authData){
    if(email != "admin@example.com"){
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      setUser("employee");
      localStorage.setItem(
        "loggedInUser", JSON.stringify({role: 'employee'})
      );
      setLoggedInUserData(employee)
      
    }else if(email == "admin@example.com" && password == 123){
      const admin = authData.admin.find(
        (e) => email == e.email && password == e.password
      )
      setUser("admin")
      

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: 'admin' })
      );
      setLoggedInUserData(admin);
    }else{
      alert("Invalid Credentials")
    }
// console.log("user is", user);
// console.log("user data is", loggedInUserData);

  }else return null;
}


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
