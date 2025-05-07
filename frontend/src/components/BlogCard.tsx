
import { Link } from 'react-router-dom'

export interface BlogCardProps{
    
    id:string,
    authorName:string,
    title:string,
    content:string,
    publishedDate:string,
    index:number
}

const BlogCard = ({authorName,title,content,publishedDate,id,index}:BlogCardProps) => {

  return <Link to={`/blog/${id}`}>
    <div className='border-b-1 border-slate-200 p-4 min-w-xl'>
        <div className='flex'>

           <div className='flex flex-col justify-center'>
           <Avator name={authorName} size='small'></Avator>
            </div> 
        
            <span className='font-extralight pl-2 pr-2'>
            {authorName}
            </span>

            <div className='flex flex-col justify-center'><Circle/>

            </div>
            <div className='pl-2 font-thin text-slate-500'>
              {publishedDate}
            </div>
            
            
        </div>

        <div className='text-xl font-semibold pt-2'>
            {title}
        </div>
        <div className='text-md font-thin pt-1'>
            {content.length>200? content.slice(0,200)+ "...":content}
        </div>

        <div className='text-slate-400 text-sm font-thin pt-4'>
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
        
    </div>
    </Link>
  
}


 export function Avator({name,size="small"}:{
    name:string,size:"small"|"big"
}){
    return(
        <div className={`inline-flex items-center justify-center ${size==='small'? "w-6 h-6 text-sm":"w-8 h-8 text-md"}  text-white bg-indigo-500 rounded-full`}>
        {name[0]}
    </div>
    )

   

}

function Circle()
{
    return(
        <div className='h-1 w-1 rounded-full bg-slate-600'>

        </div>
    )
}

export default BlogCard