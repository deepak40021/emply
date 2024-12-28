import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

 /* const [username, setusername] = useState('')
  
if(!data){
  setusername('Admin')
}else{
  setusername(data.firstname)
}  */


const logOutUser = ()=>{
localStorage.removeItem('loggedInUser') ;
props.changeUser('')
//window.location.reload()

//localStorage.clear();
window.location.href='components/Auth/Login'
  
}


  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello, <br /><span className='text-3xl font-semibold'>username 👋 </span> </h1>
      <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-3 py-2 rounded-sm'>Log-Out</button>
    </div>
  )
}

export default Header
