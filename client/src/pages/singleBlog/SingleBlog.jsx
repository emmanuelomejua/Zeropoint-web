import './singleblog.css'
import Footer from '../../components/footer/Footer'
import FooterDown from '../../components/footerDown/FooterDown'
import BlogDetail from '../../components/blogdetail/BlogDetail'
import BlogCat from '../../components/blogCat/BlogCat'

const SingleBlog = () => {
  return (
    <>
      <main className='singleBlog'>
        <div className='sideList'>
          <BlogCat/>
        </div>
        <div className='detail'>
        <BlogDetail/>
        </div>
       
      </main>
      <Footer/>
      <FooterDown/>
    </>

  )
}

export default SingleBlog
