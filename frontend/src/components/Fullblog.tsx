
import Appbar from './Appbar'
import { Avator } from './BlogCard'
import { Blog } from '../hooks'

const Fullblog = ({blog}:{blog:Blog}) => {
  return (
    <div>
        <Appbar></Appbar>
        <div className='flex justify-center '>
        <div className='grid grid-cols-12 px-10  pt-10 w-full max-w-screen-xl gap-15 '>
        <div className='col-span-8  text-center'>
          <div className='text-4xl font-extrabold'>
          {blog.title}
          </div>

          <div className='text-slate-500 pt-2'>
            post on 2nd December 2023
          </div>

          <div className='pt-4'>
          {blog.content}
          </div>
          
        </div>
        
        <div className='col-span-4  text-slate-600 text-lg'>
          Author
          <div className='flex'>
            <div className='pr-2 flex flex-col justify-center'>
            <Avator size='big' name={blog.author.name||"Anyanymous"}></Avator>
 
            </div>
            <div>
            <div className='text-xl font-bold'>
          {blog.author.name||"ananymous"}
          </div>
          
            <div className='pt-2 text-slate-500'>
              random catch phrase about author's ability to grab the users attention
            </div>
            </div>
          
            </div>
          
        </div>
        
    </div>
    </div>
        
   
    </div>
    
  )
}

export default Fullblog