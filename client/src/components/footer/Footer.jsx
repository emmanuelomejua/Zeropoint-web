import FooterDown from '../footerDown/FooterDown'
import{ Facebook, Twitter, Instagram} from '@mui/icons-material'
import './footer.css'
import img from '../../assets/1676721627373.jpg'


const Footer = () => {
  return (
    <>
    <div className='footer'>

      <div className='footleft'>

             <div className='contAll'>
                <div className='cont'>
                  <img src={img} alt='' className='fimage' height='50px' width='50pz'/>
                  <span>Zero Point</span>
                </div>

                 <p className='footDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. ?
                </p>

              </div>

              <div className='ico'>
                <Facebook className='icon'/>
                <Twitter className='icon'/>
                <Instagram className='icon'/>
              </div>

      </div>

      <div className='footright'>

      </div>
    </div>
   
    </>
  )
}

export default Footer
