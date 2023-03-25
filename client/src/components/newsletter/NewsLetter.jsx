import './newsLetter.css'
import { Send } from '@mui/icons-material'

const NewsLetter = () => {
  return (
    <div className='newletter'>
       <div className='newsContainer'>
        <h4 className='newsTitle'>Newsletter</h4>
        <p className='newsDesc'>Subscribe to our newsletter for latest update of our services/products</p>

        <div className='nInput'>
          <input type='email' placeholder='Email Address' className='newsInput'/>
          <button className='nBtn' type='submit'><Send/></button>
        </div>

       </div>
    </div>
  )
}

export default NewsLetter
