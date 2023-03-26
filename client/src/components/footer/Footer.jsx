import FooterDown from '../footerDown/FooterDown'
import{ Facebook, Twitter, Instagram, FacebookOutlined} from '@mui/icons-material'
import './footer.css'
import img from '../../assets/1676721627373.jpg'


const Footer = () => {
  return (
    <>
    <div className='footer'>
             <div className='contAll'>
                <div className='cont'>
                  <img src={img} alt='' className='fimage' height='50px' width='50px'/>
                  <span>Zero Point</span>
                </div>
                <p className='footDesc'>Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.
                </p>
                  <div className='ico'>
                    <FacebookOutlined/>
                    <Twitter/>
                    <Instagram/>
                </div>
              </div>
              <div className='footerLinks'>
                  <h2>Our Links</h2>
                  <div className='hr'>
                    <hr style={{width: '20px',marginRight: '5px' ,marginTop: '5px',height: '5px', backgroundColor: 'white', border: 'none', borderRadius: '17px'}}></hr>
                    <hr style={{width: '45px', height: '5px', marginTop: '5px', backgroundColor: 'white', border: 'none', borderRadius: '17px'}}></hr>
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Team</li>
                    <li>Blog</li>
                  </ul>
              </div>
              <div className='footerLinks'>
                  <h2>Our Services</h2>
                  <div className='hr'>
                    <hr style={{width: '20px',marginRight: '5px' ,marginTop: '5px', height: '5px', backgroundColor: 'white', border: 'none', borderRadius: '17px'}}></hr>
                    <hr style={{width: '45px', height: '5px', marginTop: '5px', backgroundColor: 'white', border: 'none', borderRadius: '17px'}}></hr>
                  </div>
                  <ul>
                    <li>Strategy & Research</li>
                    <li>Web Development</li>
                    <li>Web Solution</li>
                    <li>Digital Marketing</li>
                    <li>App Design</li>
                  </ul>
              </div>
              <div className='footerLinks'>
                  <h2>Other Links</h2>
                  <div className='hr'>
                    <hr style={{width: '20px',marginRight: '5px' ,marginTop: '5px', height: '5px', backgroundColor: 'white', border: 'none', borderRadius: '17px'}}></hr>
                    <hr style={{width: '45px', height: '5px', marginTop: '5px', backgroundColor: 'white', border: 'none', borderRadius: '17px'}}></hr>
                  </div>
                  <ul>
                    <li>FAQ</li>
                    <li>Portfolio</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Support</li>
                  </ul>
              </div>
              <div className='footerLinks'>
                  <h2>Contact Us</h2>
                  <div className='hr'>
                    <hr style={{width: '20px',marginRight: '5px' ,marginTop: '5px', height: '5px', backgroundColor: 'white', border: 'none', borderRadius: '17px'}}></hr>
                    <hr style={{width: '45px', height: '5px', marginTop: '5px', backgroundColor: 'white', border: 'none', borderRadius: '17px'}}></hr>
                  </div>
                  <ul>
                    <li>+91 987-654-3210</li>
                    <li>info@example.com</li>
                    <li>Marmora Road Chi Minh City, Vietnam</li>
                    
                  </ul>
              </div>
      </div>
    </>
  )
}

export default Footer
