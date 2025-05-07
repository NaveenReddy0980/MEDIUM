
import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import { useBlogs, useBlogsbyauthor } from '../hooks'
import BlogsSkelton from '../components/BlogsSkelton';
import {  useState } from 'react';



const Blogs = () => {
  const [text,setText]=useState("")
  
  const blogsbyauthor=useBlogsbyauthor({searchparameter:text});
  
  
  const allblogs=useBlogs();

  const {loading,blogs}=text!==""?blogsbyauthor:allblogs;
  
  

  if(loading)
  {
    return <div>
    <Appbar></Appbar>
  <div className='flex flex-col justify-center items-center mt-5'>

    <div className='flex flex-col max-w-xl'>

  

    <BlogsSkelton></BlogsSkelton>
    <BlogsSkelton></BlogsSkelton>
    <BlogsSkelton></BlogsSkelton>
    <BlogsSkelton></BlogsSkelton>
    <BlogsSkelton></BlogsSkelton>
    <BlogsSkelton></BlogsSkelton>
  
  
    </div>
  
    
  
  </div>

  </div>
  }
  return (
    <div>
      <Appbar></Appbar>

      <div className='flex justify-center mt-5 mb-5'>
      <div className='max-w-2xl w-[600px] mx-auto shadow-md'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        onChange={(e)=>{
          setText(e.target.value)
        }}
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>
      </div>
      
    <div className='flex flex-col justify-center items-center mt-5 '>

      <div className='flex flex-col max-w-3xl'>

    

   
    
    {blogs.map((blog,index)=>  <BlogCard  key={blog.id} id={blog.id} authorName={blog.author.name||"sunny"}
       title={blog.title}
      content={blog.content}
       publishedDate='2nd Ferb 2024'
       index={index} >
          
      </BlogCard>)}
      </div>
    
      
    
    </div>

    </div>
  )
}

export default Blogs