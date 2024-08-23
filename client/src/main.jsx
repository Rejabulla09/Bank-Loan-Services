import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./styles/App.css"
import { createContext } from "react"


export const server = "http://localhost:5000/api/v1";

export const context = createContext({ isAuthenticated: false })

const Appwrapper = () => {

  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [adminisAuthenticated, setadminisAuthenticated] = useState(false);
  const [loading, setloading] = useState(false);
  const [user, setuser] = useState({});

  return (
    <context.Provider value={{isAuthenticated,setisAuthenticated,adminisAuthenticated,setadminisAuthenticated,loading,setloading,user,setuser}}>
      <App />
    </context.Provider>
  )

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appwrapper />
  </React.StrictMode>,
)
