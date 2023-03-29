import BlogCat from '../../components/blogCat/BlogCat'
import Blog from '../../components/blog/Blog'
import Footer from '../../components/footer/Footer'
import FooterDown from '../../components/footerDown/FooterDown'
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
       <Footer/>
       <FooterDown/>
    </>

  )
}

export default BlogList
