import './navbar.css' 
import { ViewHeadlineSharp } from '@mui/icons-material'
import img from '../../assets/1676721627373.jpg'
import { useState } from 'react'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false)
  window.onscroll = () => {
    setScrolled(window.scrollY === 0 ? false : true)
    return () => window.onscroll = null
  }
  console.log(window.scrollY)

  return (
    <div className={scrolled ? 'navbar scroll' : 'navbar'}>
      <div className='left'>
    <img src={img} alt='Logo' className='img'/>
      Zero Point
      </div>

      <div className='right'>
        <span className='rightNav a'>Home</span>
        <span className='rightNav a'>Service</span>
        <span className='rightNav a'>Blog</span>
        <span className='rightNav a'>Contact Us</span>
        <button className='rightNav btn b'>Get a Quote</button>
      </div>

      <div className={scrolled ? 'iconWrapper scrolling' : 'iconWrapper'}> 
        <ViewHeadlineSharp  className='icon'/>
      </div>
    </div>
  )
}

export default Navbar
