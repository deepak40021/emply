import React, { useContext, useEffect, useState } from 'react'

import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData , SetuserData] = useContext(AuthContext)

  useEffect(() => {
    if (userData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [userData]);






  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser( 'admin' )
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      console.log("this is admin")

    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))

      }
      else {
        alert("invalid credentials")
      }

    }


  }


  return (
    <>







      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard   changeUser={setUser}  />
      ) : (
        user == 'employee' ?
          <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null
      )}



    </>
  )
}

export default App
