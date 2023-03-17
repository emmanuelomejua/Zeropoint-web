import './home.css'
import Header from '../../components/header/Header'
import Specialization from '../../components/specialization/Specialization'
import Agency from '../../components/agency/Agency'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import NewsLetter from '../../components/newsletter/NewsLetter'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Specialization/>
      <Agency/>
      <GetInTouch/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
