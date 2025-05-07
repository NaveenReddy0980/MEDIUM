
import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom'
import Fullblog from '../components/Fullblog'
import FullblogSkeleton from '../components/BlogSkeleton'

const Blog = () => {

  const {id}=useParams()

  const {loading,blog}=useBlog({id:id||" "})
  if(loading)
  {
    return <FullblogSkeleton></FullblogSkeleton>
  }
  
  return (
    <div>
  {blog&&<Fullblog blog={blog}></Fullblog>}    
    </div>
  )

}

export default Blog