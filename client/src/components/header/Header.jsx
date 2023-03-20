import './header.css'
// import img from '../../assets/web1.jpg'

const Header = () => {
  return (
    <>
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
       </div>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,266.7C640,277,800,267,960,224C1120,181,1280,107,1360,69.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </>
  )
}

export default Header
