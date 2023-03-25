import './singleblog.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import FooterDown from '../../components/footerDown/FooterDown'
import BlogDetail from '../../components/blogdetail/BlogDetail'

const SingleBlog = () => {
  return (
    <main className='singleBlog'>
      <BlogDetail/>
      <Footer/>
      <FooterDown/>
    </main>
  )
}

export default SingleBlog
