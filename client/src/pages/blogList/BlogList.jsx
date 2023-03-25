import Blog1 from '../../components/blog/Blog1'
import BlogCat from '../../components/blogCat/BlogCat'
import './bloglist.css'

const BlogList = () => {
  return (
    <main className='bloglist'>
      <div className='sideBar'>
        <BlogCat/>
      </div>
      <div className='mainContent'>
        <Blog1/>
        <Blog1/>
        <Blog1/>
        <Blog1/>
        <Blog1/>
      </div>

    </main>
  )
}

export default BlogList
