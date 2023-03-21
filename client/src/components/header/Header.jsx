import './header.css'
// import img from '../../assets/web1.jpg'

const Header = () => {
  return (
    <>

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
       
       </div>
       </div>

       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,192L80,208C160,224,320,256,480,266.7C640,277,800,267,960,224C1120,181,1280,107,1360,69.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
       </>
  )
}

export default Header
