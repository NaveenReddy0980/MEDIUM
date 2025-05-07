

const BlogsSkelton = () => {
  return (
     <div className='border-b-1 border-slate-200 p-4 min-w-xl'>
            <div className='flex items-center gap-3'>
    
               <div className='flex flex-col justify-center'>
               <div className={`inline-flex items-center justify-center  w-6 h-6 text-sm text-white bg-gray-500 rounded-full animate-pulse`}>
        {/* {name[0]} */}
    </div>
                </div> 
            
                <span className='   pl-2 pr-2 h-5 w-20 bg-gray-400 animate-pulse rounded-xl'>
                {/* {authorName} */}
                </span>
    
                <div className='flex flex-col justify-center'>
                <div className='h-1 w-1 rounded-full bg-slate-600 animate-pulse'>

</div>
    
                </div>
                <div className='pl-2 h-5 w-40 bg-gray-300 animate-pulse rounded-2xl '>
                  {/* {publishedDate} */}
                </div>
                
                
            </div>
    
            <div className='text-xl font-semibold pt-2 h-6 w-50 mt-4 rounded-xl bg-gray-400 animate-pulse'>
                {/* {title} */}
            </div>
            <div className="min-w-xl h-4 bg-gray-300 animate-pulse mt-3 rounded-xl"></div>
            <div className="min-w-xl h-4 bg-gray-300 animate-pulse mt-3 rounded-xl"></div>
            <div className="min-w-xl h-4 bg-gray-300 animate-pulse mt-3 rounded-xl"></div>
            <div className='text-md font-thin pt-1'>
                {/* {content.length>200? content.slice(0,200)+ "...":content} */}
            </div>

            <div className="flex gap-2 mt-4 pl-2">
                <div className="h-[9px] w-20 bg-slate-500 rounded-2xl animate-pulse"></div>
                <div className="h-[9px] w-10 bg-slate-500 rounded-2xl animate-pulse"></div>

            </div>    
            <div className='text-slate-400 text-sm font-thin pt-4'>
                {/* {`${Math.ceil(content.length/100)} minute(s) read`} */}
            </div>
            
        </div>
  )
}



export default BlogsSkelton