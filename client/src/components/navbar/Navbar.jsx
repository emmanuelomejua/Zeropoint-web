import './navbar.css' 
import { ViewHeadlineSharp } from '@mui/icons-material'
import img from '../../assets/1676721627373.jpg'
import { useState } from 'react'
import Sidebar from '../HamburgerMenu/Sidebar'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [show, setShow] = useState(false)

  window.onscroll = () => {
    setScrolled(window.scrollY === 0 ? false : true)
    return () => window.onscroll = null
  }
 

  
  return (
    <div className={scrolled ? 'navbar scroll' : 'navbar'}>
      <div className='left'>
    <img src={img} alt='Logo' className='img'/>
      Zero Point
      </div>

      <div className='right'>
        <span className='rightNav a'><Link className='link' to='/'>Home</Link></span>
        <span className='rightNav a'><Link className='link' to='/service'>Service</Link></span>
        <span className='rightNav a'><Link className='link' to='/blog'>Blog</Link></span>
        <span className='rightNav a'><Link className='link' to='/contact'>Contact Us</Link></span>
        <button className='rightNav btn b'><Link></Link>Get a Quote</button>
      </div>

      <div className={scrolled ? 'iconWrapper scrolling' : 'iconWrapper'}> 
       <span onClick={() => setShow(!show)}> <ViewHeadlineSharp  className='icon' /></span>
      </div>
      <Sidebar show={show} onClose={() => setShow(false)}/>
    </div>
  )
}

export default Navbar
