import './getintouch.css'
import img from '../../assets/thum4.jpg'

const GetInTouch = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <section className='getinouch'>
        <div className='gContainer'>
            <div className='gLeft'>
                <form onSubmit={handleSubmit}>
                    <h2 className='gTitle'>Contact Us</h2>
                    <input type='text' placeholder='Name' className='gInput'/>
                    <input type='email' placeholder='Email' className='gInput'/>
                    <textarea placeholder='Message' rows={5} className='gInput'/>
                    <button className='gBtn' type='submit'>Send</button>
                </form>
            </div>
            <div className='gRight'>
            <img src={img} alt='' className='gImg'/>
            </div>
        </div>
   
    </section>
  )
}

export default GetInTouch
