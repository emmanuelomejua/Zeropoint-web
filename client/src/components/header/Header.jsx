import './header.css'
import img from '../../assets/web1.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerWrapper'>
        
       <div className='headerLeft'>
        <h4 className='headerTitle'>We are Zero Point IT Services</h4>
        <div className='mainHeader'>
          <h1 className='headDesc'> We provide IT solutions to our clients</h1>
          <p className='descHeader'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae cum maiores neque reprehenderit. Consectetur illo, quos ducimus sapiente dolor temporibus deleniti, alias veritatis dolores ullam officiis, atque recusandae accusantium fugit
          </p>
          <button className='btnHeader'>Learn More</button>
        </div>
       </div>

       <div className='headerRight'>
        <img src={img} alt='' className='headerImg'/>
       </div>

       </div>
    </div>
  )
}

export default Header
