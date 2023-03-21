import './getInTouch.css'
import img from '../../assets/web1.jpg'

const GetInTouch = () => {
  return (
    <div className='getInTouch'>
      <div className='getLeft'>
        <img src={img} alt='' className='getImg'/>
      </div>

      <div className='getRight'>
        <h2 className='rightHead'>Get in touch with us</h2>
        <form className='getContainer'>
          <input type='text' placeholder='Full Name' className='getInput a'/>
          <input type='email' placeholder='Email Address' className='getInput'/>
          <input type='Number' min={1} placeholder='Phone No.' className='getInput'/>
          <input type='text' placeholder='Project Title' className='getInput'/>

          <textarea type='text' placeholder='Message' className='getInput textarea'>

          </textarea>

          <button className='getBtn'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default GetInTouch
