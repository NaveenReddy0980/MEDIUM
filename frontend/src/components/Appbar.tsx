
import { useState } from 'react';
import { Avator } from './BlogCard'
import { Link, useNavigate } from 'react-router-dom'

const Appbar = () => {
  const navigate = useNavigate();
  const [toggle,settoggle]=useState(false);
  return (
    <div className='flex justify-center w-full'>
    <div className='relative border-b flex justify-between px-10 py-4 w-full max-w-6xl'>
   <Link to={'/blogs'} className='flex felx-col justify-center cursor-pointer text-white bg-green-600 font-medium rounded-3xl text-sm px-5 py-2.5 
   text-center  mb-2 focus:outline-none focus:ring-4 focus:ring-green-300  hover:bg-green-800 '>
    Medium
   </Link>

   <div>
    <button onClick={()=>{
      navigate('/publish')
    }} className='text-white bg-green-600 hover:bg-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 
    text-center  mb-2 focus:outline-none focus:ring-4 focus:ring-green-300 mr-4'> New</button>
    <button onClick={()=>{
      settoggle(prev=>!prev)
    }} className='hover:cursor-pointer'> <Avator name='Naveen' size="big"></Avator></button>
    
   </div>
   {toggle&&<div className='bg-white shadow-lg border-1 rounded-lg border-gray-300  w-50 h-30 absolute top-[80%] right-[3%]'>
      <div className='flex justify-between py-3 px-4'>
        <div>
          Medium
        </div>
        <button  onClick={()=>{
          localStorage.removeItem('token');
          navigate('/signin')
        }} className='text-blue-600 hover:cursor-pointer'>
          Signout
        </button>
      </div>
      <div className='flex justify-between items-center mt-3 px-3'>
      <div className="inline-flex items-center justify-center w-9 h-9 text-md text-white bg-indigo-500 rounded-full ml-4 ">
    N
</div>
<div>
  Naveen
</div>
      </div>

     
    </div>}
    
    </div>
    </div>
  )
}

export default Appbar