import React, { useState } from 'react'

const login = ({handleLogin}) => {

 
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()

        handleLogin(email,password)

        setpassword("")
        
        setEmail("")
    }




  return (
    <div className='flex items-center justify-center h-screen w-screen'>
     

     <div className='border-2 rounded-xl border-emerald-700 p-20'>

<form 

onSubmit={(e)=>
submitHandler(e)
}



className='flex flex-col items-center justify-center' >

<input
value={email} 
onChange={
    (e)=>{
      setEmail(e.target.value)
    }
}

required className='text-white outline-none bg-transparent border-2 border-emerald-400 py-3 px-5 rounded-full text-xl' type="email" placeholder='enter your email '  />
<input 

value={password}
onChange={(e)=>{

setpassword(e.target.value)

}}
required className='text-white outline-none bg-transparent border-2 border-emerald-400 py-3 px-5  mt-6 rounded-full text-xl' type="password"  placeholder='enter password' />
<button className='text-white outline-none bg-emerald-400 py-3 px-5 rounded-full text-xl mt-5'>Login</button>
</form>

     </div>
    </div>
  )
}

export default login
