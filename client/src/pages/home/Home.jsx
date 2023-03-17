import './home.css'
import Header from '../../components/header/Header'
import Specialization from '../../components/specialization/Specialization'
import Agency from '../../components/agency/Agency'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Specialization/>
      <Agency/>
    </div>
  )
}

export default Home
