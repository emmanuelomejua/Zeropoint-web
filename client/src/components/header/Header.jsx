import './header.css'
import img from '../../assets/1676721627373.jpg'

const Header = () => {
  return (
    <div className='header'>
       <div className='headerLeft'>
        <h4 className='headerTitle'>We are Zero Point IT Services</h4>
        <div className='mainHeader'>
          <h1>We provide IT solutions to our clients</h1>
          <p className='descHeader'>
          React is an in-demand framework that'll bring real value to your career or next project. But like any technology, learning React can be tricky, and finding the right teacher can make things a whole lot easier
          </p>
          <button className='btnHeader'>Learn More</button>
        </div>
       </div>

       <div className='headerRight'>
        <img src={img} alt='' className='headerImg'/>
       </div>
    </div>
  )
}

export default Header
