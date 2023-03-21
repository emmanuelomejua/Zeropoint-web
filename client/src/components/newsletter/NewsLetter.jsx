import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newletter'>
      <div className='newsRight'>
        <h1>Subscribe to our newsletter for latest update of our services/product</h1>
      </div>
      <div className='newsLeft'>
        <div className='newsContainer'>
        <input type='text' className='newsInput' placeholder='Email Address'/>
        <button className='newsBtn'>Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
