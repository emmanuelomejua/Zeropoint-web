import './subscribe.css'

const Subscribe = () => {
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
        <button className='btn'>Start Now</button>
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
