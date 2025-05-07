import { SinginInput, SingupInput } from '@naveenreddy7252/medium-common';
import React, { useState } from 'react'
import axios from 'axios';
import { BACKEND_URL } from '../config';
import {  useNavigate } from 'react-router-dom';

const SignComponent = ({type}:{type:"signin"|"signup"}) => {
    const [loading,setLoading]=useState(false);


    const [postInputs, setPostInputs] = useState<SinginInput | SingupInput>(
        type === 'signin' ? {
            email:"",
            password:""
        }:
        {
            name:"",
            email:"",
            password:""
        }
      );

      const navigate=useNavigate()

     async function sendrequest()
     {
        try{
            setLoading(true)
            const response= await  axios.post(`${BACKEND_URL}/api/v1/users/${type}`,
                
                    postInputs
                
                
            )
            const jwt=response.data.token;
            localStorage.setItem("token",jwt);
            setPostInputs(
                type === 'signin' ? {
                    email:"",
                    password:""
                }:
                {
                    name:"",
                    email:"",
                    password:""
                }

            )
            navigate("/blogs")
        }
        catch(err)
        {

        }
        finally
        {
            setLoading(false)
        }
    
     } 
   
  return (
    <div className='flex bg-white h-screen items-center justify-center'>
        <div className=' flex  justify-center items-center  '>
            <div className='flex flex-col gap-[20px] '>
                <div className='font-bold text-4xl text-center'>Create an account</div>
                {type==='signup'&&<div className='font-light text-center text-[21px] mt-[-10px] mb-[5px]'>Already have an account? <a className='underline' href="/signin">Login</a></div>}

                {type==='signin'&&<div className='font-light text-center text-[21px] mt-[-10px] mb-[5px]'>Dont have an account? <a className='underline' href="/signup">SignUp</a></div>}

                { type==='signup'&&<LabeledInput label="Username" placeholder='Enter your username'type={null} value={"name" in postInputs?postInputs.name:""} name="username" onchange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        name:e.target.value
                    })

                }}></LabeledInput>}

                <LabeledInput label="Email" placeholder='m@example.com' value={postInputs.email} type={null}  name="email" onchange={(e)=>{

                    setPostInputs({
                        ...postInputs,
                        email:e.target.value
                    })
                    

                }}></LabeledInput>


                <LabeledInput label="Password" placeholder='12345' type='password' value={postInputs.password} name="password" onchange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        password:e.target.value
                    })

                }}></LabeledInput>
                
            

                <button
          className="bg-black text-white h-[50px] rounded-md text-xl hover:bg-gray-800 flex justify-center items-center"
          onClick={sendrequest}
          disabled={loading}
        >
          {loading ? <div>
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8v4l-2 2 2 2V4a8 8 0 018 8h-4l-2-2-2 2h4a8 8 0 01-8 8v-4l2-2-2-2v4a8 8 0 01-8-8h4l2 2 2-2H4z"
                />
              </svg>
              Processing...
            </div>
            </div>: <div>
            {type==='signin'?"signin":"signup"}
            </div>}
        </button>
            </div>
        </div>
    </div>
  )
}

function LabeledInput({label,placeholder,type,onchange,value,name}:{
    label:string,
    placeholder:string,
    type:string|null
    value?:string
    name:string
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
})
{

    return(
    <div>
    <div className='font-medium text-2xl mb-[20px]'>{label}</div>
    <input className='shadow-md border-1 border-slate-100 w-[380px] h-[40px] p-[20px] mt-[-10px] ' type={type||"text"} placeholder={placeholder} value={value||""} onChange={onchange}
     name={name}
     autoComplete={name} 
     
    />
    </div>
    )

}

export default SignComponent
