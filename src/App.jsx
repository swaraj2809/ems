import { useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import { useState } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const authData = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState();

  console.log(loggedInUserData);

  const handleLogin = (email, password) => {
    if (authData) {
      if (email != "admin@example.com") {
        const employee = authData.employees.find(
          (e) => email == e.email && password == e.password
        );
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
        setLoggedInUserData(employee);
      } else if (email == "admin@example.com" && password == 123) {
        const admin = authData.admin.find(
          (e) => email == e.email && password == e.password
        );
        setUser("admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        setLoggedInUserData(admin);
      } else {
        alert("Invalid Username Password");
      }
    } else {
      return null;
    }
  };

  console.log("user is:", user);
  console.log("user data is", loggedInUserData);

  if (!authData) return null;
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
};

export default App;

// useEffect(() => {
//   if(authData){
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//     }
//   }
// }, [authData]);
// useEffect(() => {
//   const data = getLocalStorage();
//   if (data) setLoggedInUserData(data);
//   return () => {};
// }, []);

// const handleLogout = () => {
//   setUser(null);
//   localStorage.removeItem("loggedInUser");

// }
