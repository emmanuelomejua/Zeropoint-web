import BlogCat from '../../components/blogCat/BlogCat'
import Blog from '../../components/blog/Blog'
import './bloglist.css'

const BlogList = () => {
  return (
    <>
       <div className='bloglist'>
          <div className='sideList'>
              <BlogCat/>
          </div>
        <div className='mainList'>
         <Blog/>
         <Blog/>
         <Blog/>
         <Blog/>
         <Blog/>
        </div>
       </div>
    </>

  )
}

export default BlogList
