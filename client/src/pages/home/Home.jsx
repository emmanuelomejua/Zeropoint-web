import './home.css'
import Header from '../../components/header/Header'
import Specialization from '../../components/specialization/Specialization'
import Agency from '../../components/agency/Agency'
import GetInTouch from '../../components/getintouch1/GetInTouch'
import NewsLetter from '../../components/newsletter/NewsLetter'
import Footer from '../../components/footer/Footer'
import FooterDown from '../../components/footerDown/FooterDown'
import Features from '../../components/features/Features'
import Subscribe from '../../components/plansubscribe/Subscribe'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Specialization/>
        <Agency/>
        <Features/>
        <GetInTouch/>
        <NewsLetter/>
        <Subscribe/>
        <Footer/>
        <FooterDown/>
    </div>
  )
}
export default Home
