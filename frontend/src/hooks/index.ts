import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

export interface Blog{
    content:string,
    title:string,
    id:string,
    author:{
        name:string
    }
}

export const useBlog=({id}:{id:string})=>{
    const [loading,setLoading]=useState(true)
    const [blog,setBlog]=useState<Blog>()
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            
                headers:{
                    authorization:localStorage.getItem('token')
                }
            
        })
            .then(response=>{
                        setBlog(response.data.post)
                        setLoading(false)
            })
    },[])

    return{
        loading,
        blog
    }
}

export const useBlogs=()=>{
    const [loading,setLoading]=useState(true)
    const [blogs,setBlogs]=useState<Blog[]>([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            
                headers:{
                    authorization:localStorage.getItem('token')
                }
            
        })
            .then(response=>{
                        setBlogs(response.data.posts)
                        setLoading(false)
            })
    },[])

    return{
        loading,
        blogs
    }
}

export const useBlogsbyauthor=({searchparameter}:{searchparameter:string}) =>{
   
        
        const[loading,setLoading]=useState(true);
        const [blogs,setBlogs]=useState<Blog[]>([]);
        
        useEffect(()=>{
            console.log(searchparameter)
            
          const delay=  setTimeout(()=>{
                axios.get(`${BACKEND_URL}/api/v1/blog/posts`,
                
                    {
                        params: { searchparameter },
                        headers:{
                            authorization:localStorage.getItem('token')
                        }
                    }
                )
                .then( response=>{
                    setBlogs(response.data)
                    setLoading(false)
                }
                )

            },500)

            return ()=>clearTimeout(delay)
           

        },[searchparameter])
        return{
            loading,
            blogs
        }
}