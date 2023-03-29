import './subscribe.css'
import { usePaystackPayment, PaystackButton } from 'react-paystack'
import { useState } from 'react'
const Subscribe = () => {
  // const publicKey = 'pk_test_ab15a6ac93a88450dfc08e30452fb84ea95c85b3'
  // const amount = 1000000
  // const [email, setEmail] = useState('jherieelegba@gmail.com')
  // const [name, setName] = useState('jherie')
  // const [phone, setPhone] = useState('+2348116619663')
  const [basicModal, setBasicModal] = useState(false)
  const [standardModal, setStandardModal] = useState(false)
  const [premiumModal, setPremiumModal] = useState(false)

  /****for basic config */
  const [basicConfig, setBasicConfig] = useState({
		name: "jherie",
		email: "jherieelegba@gmail.com",
		amount: 100000,
		publicKey: "pk_test_ab15a6ac93a88450dfc08e30452fb84ea95c85b3",
	});
/****for standard config */
  const [standardConfig, setStandardConfig] = useState({
		name: "jherie",
		email: "jherieelegba@gmail.com",
		amount: 200000,
		publicKey: "pk_test_ab15a6ac93a88450dfc08e30452fb84ea95c85b3",
	});
  /****for premium config */
  const [premiumConfig, setPremiumConfig] = useState({
		name: "jherie",
		email: "jherieelegba@gmail.com",
		amount: 300000,
		publicKey: "pk_test_ab15a6ac93a88450dfc08e30452fb84ea95c85b3",
	});


  const initializeBasicPayment = usePaystackPayment(basicConfig)
  const initializeStandardPayment = usePaystackPayment(standardConfig)
  const initializePremiumPayment = usePaystackPayment(premiumConfig)
  const onSuccess = () => {setBasicModal(false) || setStandardModal(false) || setPremiumModal(false)}
  const onClose = () => {setBasicModal(false) || setStandardModal(false) || setPremiumModal(false)}
 
  const handleBasicChange = (e) => {
		const valueName = e.target.name;
		const value = e.target.value;
		setBasicConfig({ ...basicConfig, [valueName]: value });
		console.log(basicConfig);
	};
  const handleStandardChange = (e) => {
		const valueName = e.target.name;
		const value = e.target.value;
		setStandardConfig({ ...standardConfig, [valueName]: value });
		console.log(standardConfig);
	};
  const handlePremiumChange = (e) => {
		const valueName = e.target.name;
		const value = e.target.value;
		setPremiumConfig({ ...premiumConfig, [valueName]: value });
		console.log(premiumConfig);
	};

  const handleBasicSubmit =(e)=> {
    e.preventDefault();
    initializeBasicPayment(onSuccess, onClose);
  }
  const handleStandardSubmit =(e)=> {
    e.preventDefault();
    initializeStandardPayment(onSuccess, onClose);
  }
  const handlePremiumSubmit =(e)=> {
    e.preventDefault();
    initializePremiumPayment(onSuccess, onClose);
  }

  return (
    <div className='subscribe-container'>
      <div className='plan-detail'>
        <h2>Basic Plan</h2>
        <h3><span>$49</span>/Month</h3>
        <ul>
          <li>Graphic Design</li>
          <li>Web Design</li>
          <li>UI/UX</li>
          <li>HTML/CSS</li>
          <li>SEO Marketing</li>
          <li>Business Analysis</li>
        </ul>
        <button className='btn' onClick={()=>setBasicModal(true)}>Start Now</button>
        {basicModal && 
          <div className='modal-container'>
            <div className='modal' >
                <form onSubmit={handleBasicSubmit}>
                  <input type="text" name='name'placeholder='Enter your Name' onChange={handleBasicChange} required/>
                  <input type="mail" name='email'placeholder='Enter your email'onChange={handleBasicChange} required/>
                  <input type="phone" name='phone'placeholder='Enter your Phone Number'onChange={handleBasicChange} required/>
                  <div>
                    <button type='submit'>Submit</button>
                    <button onClick={() => setBasicModal(false)}>Close</button>  
                  </div>
                </form>
            </div>
          </div>
        }
      </div>
      <div className='plan-detail'>
        <h2>Standard Plan</h2>
        <h3><span>$99</span>/Month</h3>
        <ul>
          <li>Graphic Design</li>
          <li>Web Design</li>
          <li>UI/UX</li>
          <li>HTML/CSS</li>
          <li>SEO Marketing</li>
          <li>Business Analysis</li>
        </ul>
        <button className='btn'onClick={()=>setStandardModal(true)}>Start Now</button>
        {standardModal && 
          <div className='modal-container'>
            <div className='modal' >
                <form onSubmit={handleStandardSubmit} >
                  <input type="text" name='name'placeholder='Enter your Name' onChange={handleStandardChange} required/>
                  <input type="mail" name='email'placeholder='Enter your email'onChange={handleStandardChange} required/>
                  <input type="phone" name='phone'placeholder='Enter your Phone Number'onChange={handleStandardChange} required/>
                  <div>
                    <button onClick={() => initializeStandardPayment(onSuccess, onClose)}>Submit</button>
                    <button onClick={() => setStandardModal(false)}>Close</button>  
                  </div>
                </form>
                
            </div>
          </div>
        }
      </div>
      <div className='plan-detail'>
        <h2>Premium Plan</h2>
        <h3><span>$149</span>/Month</h3>
        <ul>
          <li>Graphic Design</li>
          <li>Web Design</li>
          <li>UI/UX</li>
          <li>HTML/CSS</li>
          <li>SEO Marketing</li>
          <li>Business Analysis</li>
        </ul>
        <button className='btn'onClick={()=>setPremiumModal(true)}>Start Now</button>
        {premiumModal && 
          <div className='modal-container'>
            <div className='modal' >
                <form onSubmit={handlePremiumSubmit} >
                  <input type="text" name='name'placeholder='Enter your Name' onChange={handlePremiumChange} required/>
                  <input type="mail" name='email'placeholder='Enter your email'onChange={handlePremiumChange} required/>
                  <input type="phone" name='phone'placeholder='Enter your Phone Number'onChange={handlePremiumChange} required/>
                  <div>
                    <button onClick={() => initializePremiumPayment(onSuccess, onClose)}>Submit</button>
                    <button onClick={() => setPremiumModal(false)}>Close</button>  
                  </div>
                </form>
                
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Subscribe
