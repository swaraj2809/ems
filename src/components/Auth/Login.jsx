import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  // console.log(handleLogin)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail(email)
    setPassword(password)
    // console.log("Form Submitted")
}
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="p-20 rounded-xl border-2 border-emerald-600">
        <form onSubmit={(e)=>{
            submitHandler(e)
            console.log(email, password)
            
        }}
        className="flex flex-col items-center justify-center">
          <input required
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            className="border-2 border-emerald-600 py-3 px-6 text-xl  rounded-full outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input required
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            className="border-2 border-emerald-600 py-3 px-6 text-xl  rounded-full outline-none bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="border-2 mt-5 bg-emerald-600 border-none py-3 px-5 text-xl  rounded-full text-white outline-none  placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login
