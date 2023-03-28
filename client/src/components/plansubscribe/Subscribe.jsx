import './subscribe.css'
import { usePaystackPayment, PaystackButton } from 'react-paystack'
import { useState } from 'react'
const Subscribe = () => {

  const publicKey = 'pk_test_ab15a6ac93a88450dfc08e30452fb84ea95c85b3'
  const amount = 1000000
  const [email, setEmail] = useState('jherieelegba@gmail.com')
  const [name, setName] = useState('jherie')
  const [phone, setPhone] = useState('+2348116619663')
  const componentProps = {
    email,
    amount,
    name,
    phone,
    publicKey,
    // metadata: {
    //   name,
    //   phone,
    // },
    
    // text: 'Pay Now',
    // onSuccess: () => 
    //   alert("Thanks")
    // ,
    // onClose: () => alert('oops!')
  }
  const [config, setConfig] = useState({
		name: "jherie",
		email: "jherieelegba@gmail.com",
		amount: 100000,
		publicKey: "pk_test_ab15a6ac93a88450dfc08e30452fb84ea95c85b3",
	});
  const initializePayment = usePaystackPayment(config)
 const onSuccess = () => {alert('Thanks')}
 const onClose = () => {alert('oops')}
 


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
        <button className='btn' onClick={() =>initializePayment()}>Start Now</button>
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
        <button className='btn'>Start Now</button>
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
        <button className='btn'>Start Now</button>
      </div>
    </div>
  )
}

export default Subscribe
