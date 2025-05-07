import  { useState } from 'react'
import Appbar from '../components/Appbar'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'

const Publish = () => {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("")
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate()
  
  return (
    <div>
        <Appbar></Appbar>
        <div className='flex flex-col justify-center items-center pt-8 '>

            <div className='max-w-4xl w-full'>
              <div className='flex flex-col'>

             
                <input onChange={(e)=>{
                  setTitle(e.target.value)
                }} type="text" className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm
                rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 p-2.5' placeholder='title'/>
            
             <textarea onChange={(e)=>{
              setDescription(e.target.value)
             }}
                
                className="mt-2 px-2 rounded-lg border-1 border-gray-400 align-top shadow-xs sm:text-sm  focus:outline-none"
                rows={7}
                placeholder="write an article"
              ></textarea>
             {  loading? 
    <button type="button" className="bg-indigo-400 h-max w-max rounded-lg mt-2 text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
        <div className="flex items-center justify-center m-[10px]"> 
            <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
            <div className="ml-2"> Processing... </div>
        </div>
    </button>

             :<button onClick={async()=>{
                setLoading(true)
               const response= await  axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title,
                    content:description

                  },
                {
                  headers:{
                    authorization:localStorage.getItem('token')
                  }
                });
                  setLoading(false)
                  navigate(`/blog/${response.data.id}`)
                
              }} className='mt-2 bg-blue-700 h-[35px] w-[100px]  rounded-xl text-white focus:ring-4 focus:ring-blue-200 hover:cursor-pointer'>Publish</button>}
        </div>
        </div>
      </div>



      </div>

   
  )
}



export default Publish